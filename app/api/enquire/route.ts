import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, city, pcbPercentage, course, campus } = data;

    // Server-side validation
    if (!name || !phone || !email || !city || pcbPercentage === undefined || !course) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Phone number simple length check
    if (phone.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // Email simple check
    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const percentage = parseFloat(pcbPercentage);
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      return NextResponse.json(
        { error: "Please enter a valid academic percentage (0-100%)." },
        { status: 400 }
      );
    }

    // Calculate simulated eligibility & scholarship estimate
    let scholarshipEstimate = 0;
    if (percentage >= 99) {
      scholarshipEstimate = 15;
    } else if (percentage >= 90) {
      scholarshipEstimate = 10;
    } else if (percentage >= 85) {
      scholarshipEstimate = 5;
    }

    // Prepare simulated success response
    const enquiryId = `NIMT-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been successfully registered in the NIMT Central Admissions System.",
      enquiryId,
      details: {
        name,
        course,
        scholarshipEstimate,
        eligible: percentage >= (course === "BPT" ? 50 : 45),
        counsellorContact: "919555192192", // NIMT official admission enquiry helpdesk simulated
      }
    });

  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
