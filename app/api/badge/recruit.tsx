import { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

export default async function handler(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") ?? "땅땅 특공대";
    const title = searchParams.get("company") ?? "ReactNative 주니어 개발자 채용";
    const tags = searchParams.get("tags") ?? "태그";
    const annualSalary = searchParams.get("annualSalary") ?? "3,000 ~ 5,000만원";

    return new Response(
        `
        <svg width="360" height="148" viewBox="0 0 360 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="359" height="135" rx="7.5" fill="white" stroke="#E9ECEF"/>
          <g>
            <rect x="16" y="16" width="75" height="18" fill="white"/>
            <text x="16" y="25" font-size="14" dominant-baseline="middle" fill="#212529">${name}</text>
          </g>
          <g>
            <rect x="16" y="42" width="328" height="22" fill="white"/>
            <text x="16" y="53" font-size="18" font-weight="bold" dominant-baseline="middle" fill="#212529">${title}</text>
          </g>
          <g style="position: relative;">
            <rect x="16" y="76" width="46" height="22" rx="11" fill="#F1F3F5"/>
            <text x="39" y="87"  width="45" height="22" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="#212529">${tags}</text>
          </g>
          <g>
            <rect x="16" y="106" width="44" height="18" fill="white"/>
            <text x="16" y="115" font-size="12" dominant-baseline="middle" fill="#212529">${annualSalary}</text>
          </g>
        </svg>        
        `,
        {
            status: 200,
            headers: {
                "content-type": "image/svg+xml",
            },
        },
    );
}
