import website from "../config/website";

// export const dynamic = "force-static";

const content = `# ${website.title}

> ${website.summary}

${website.about} The studio is located in ${website.neighbourhood}, ${website.city}. Orders and quotes by email or Instagram.

- Services: ${website.services.join(", ")}
- Area: ${website.areaServed} (travel on request)
- Contact: ${website.email}
- Languages: ${website.languages.join(", ")}

## Links

- [Website](${website.url}/): Portfolio and contact
- [Instagram](${website.instagram}): Recent work
`;

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
