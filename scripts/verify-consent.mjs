import fs from "fs";
import path from "path";

const MEDIA_TS_PATH = path.join(process.cwd(), "src", "lib", "media.ts");

function checkConsentAndExistence() {
  if (!fs.existsSync(MEDIA_TS_PATH)) {
    console.error("src/lib/media.ts missing");
    process.exit(1);
  }

  const content = fs.readFileSync(MEDIA_TS_PATH, "utf-8");

  // Consent Gate: if showsChildFace is true, consent must be true OR "owner-published"
  if (content.includes("showsChildFace: true") && content.includes('consent: false')) {
    console.error(`[CONSENT FAILURE] Unconsented image showing child face detected in media.ts registry!`);
    process.exit(1);
  }

  console.log("Consent & registry validation passed successfully.");
}

checkConsentAndExistence();
