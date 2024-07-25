import { createUploadthing } from "uploadthing/next";
import { getServerSession } from "next-auth";
import { authConfig } from "../auth/[...nextauth]/authConfig";

const uploadBuilder = createUploadthing();

// Auth function is to check on serer session and return the user session
const auth = async () => {
  const session = await getServerSession(authConfig);
  return session;
};

export const UTrouter = {
  imageUploader: uploadBuilder({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const session = await auth(req);

      // If you throw, the user will not be able to upload
      if (!session) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      // Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
};
