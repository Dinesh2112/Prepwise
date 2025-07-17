import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    // Mock question generation for now
    // TODO: Replace with actual AI question generation
    const mockQuestions = [
      "Tell me about yourself and your background",
      "What interests you about this role?",
      "Describe a challenging project you worked on",
      "How do you handle tight deadlines?",
      "What are your strengths and weaknesses?",
      "Where do you see yourself in 5ears?",
      "Why should we hire you?",
      "What are your salary expectations?",
    ];

    const interview = {
      role: role,
      type: type,
      level: level,
      techstack: techstack.split(","),
      questions: mockQuestions.slice(0, Math.min(amount, mockQuestions.length)),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}
