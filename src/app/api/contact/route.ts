import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, phone, product, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.naver.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'icecuve84@naver.com',
        subject: `[에이원특수강] 문의 접수 - ${name}`,
        html: `
            <div style="font-family: 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h2 style="color: #1d4ed8; margin-bottom: 20px;">📩 에이원특수강 고객 문의</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background:#f3f4f6;">
                        <td style="padding:10px 14px; font-weight:bold; width:140px; border:1px solid #e5e7eb;">이름 / 회사명</td>
                        <td style="padding:10px 14px; border:1px solid #e5e7eb;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding:10px 14px; font-weight:bold; background:#f3f4f6; border:1px solid #e5e7eb;">이메일</td>
                        <td style="padding:10px 14px; border:1px solid #e5e7eb;">${email}</td>
                    </tr>
                    <tr style="background:#f3f4f6;">
                        <td style="padding:10px 14px; font-weight:bold; border:1px solid #e5e7eb;">연락처</td>
                        <td style="padding:10px 14px; border:1px solid #e5e7eb;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding:10px 14px; font-weight:bold; background:#f3f4f6; border:1px solid #e5e7eb;">관심 제품 / 강종</td>
                        <td style="padding:10px 14px; border:1px solid #e5e7eb;">${product}</td>
                    </tr>
                    <tr style="background:#f3f4f6;">
                        <td style="padding:10px 14px; font-weight:bold; vertical-align:top; border:1px solid #e5e7eb;">문의 내용</td>
                        <td style="padding:10px 14px; white-space:pre-wrap; border:1px solid #e5e7eb;">${message}</td>
                    </tr>
                </table>
                <p style="color:#6b7280; font-size:12px; margin-top:20px;">이 메일은 에이원특수강 홈페이지 문의 폼을 통해 자동 발송되었습니다.</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Mail send error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
