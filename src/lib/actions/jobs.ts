import { JobFormData } from "@/types/jobs";

export const createJob = async (data: JobFormData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return res.json();
}
