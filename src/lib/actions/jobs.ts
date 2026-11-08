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


export const deleteJob = async (jobId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${jobId}`, {
        method: "DELETE",
    });
    return res.json();
}