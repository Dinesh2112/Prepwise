"use server";

import { db } from "@/firebase/admin";
import { feedbackSchema } from "@/constants";

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewId, userId, transcript, feedbackId } = params;

  try {
    // Mock feedback generation for now
    // TODO: Replace with actual AI feedback generation
    const mockFeedback = {
      totalScore: 75,
      categoryScores: {
        "Communication Skills": 80,
        "Technical Knowledge": 70,
        "Problem-Solving": 75,
        "Cultural & Role Fit": 80,
        "Confidence & Clarity": 75,
      },
      strengths: [
        "Good communication skills",
        "Shows enthusiasm for the role",
        "Demonstrates basic technical knowledge",
      ],
      areasForImprovement: [
        "Could provide more specific examples",
        "Technical depth could be improved",
        "Practice more problem-solving scenarios",
      ],
      finalAssessment: "Overall good performance with room for improvement in technical depth and specific examples.",
    };

    const feedback = {
      interviewId: interviewId,
      userId: userId,
      totalScore: mockFeedback.totalScore,
      categoryScores: mockFeedback.categoryScores,
      strengths: mockFeedback.strengths,
      areasForImprovement: mockFeedback.areasForImprovement,
      finalAssessment: mockFeedback.finalAssessment,
      createdAt: new Date().toISOString(),
    };

    let feedbackRef;

    if (feedbackId) {
      feedbackRef = db.collection("feedback").doc(feedbackId);
    } else {
      feedbackRef = db.collection("feedback").doc();
    }

    await feedbackRef.set(feedback);

    return { success: true, feedbackId: feedbackRef.id };
  } catch (error) {
    console.error("Error saving feedback:", error);
    return { success: false };
  }
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(id).get();

  return interview.data() as Interview | null;
}

export async function getFeedbackByInterviewId(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> {
  const { interviewId, userId } = params;

  const querySnapshot = await db
    .collection("feedback")
    .where("interviewId", "==", interviewId)
    .where("userId", "==", userId)
    .limit(1)
    .get();

  if (querySnapshot.empty) return null;

  const feedbackDoc = querySnapshot.docs[0];
  return { id: feedbackDoc.id, ...feedbackDoc.data() } as Feedback;
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
