"use client";

import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteJob } from "@/lib/actions/jobs";

type Props = {
  jobId: string;
  jobTitle?: string;
};

const DeleteJobConfirmation = ({ jobId, jobTitle }: Props) => {
  const router = useRouter();
  

  const handleDelete = async() => {
    console.log(`Deleting job with ID: ${jobId}`);
    const res = await deleteJob(jobId);
    if (res.deletedCount > 0) {
      console.log(`Job with ID: ${jobId} deleted successfully.`);
      router.refresh();
    } else {
      console.error(`Failed to delete job with ID: ${jobId}.`);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant="destructive"
            size="sm"
            type="button"
            className="bg-rose-500/15 text-rose-300 hover:bg-rose-500/25 hover:text-rose-200"
          >
            Delete
          </Button>
        }
      />
      <AlertDialogContent
        size="sm"
        className="border border-white/10 bg-[#111113] text-white shadow-[0_12px_40px_rgba(0,0,0,0.5)] ring-white/10"
      >
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-rose-500/15 text-rose-300">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle className="text-white">
            Delete this job?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white/60">
            {jobTitle ? (
              <>
                <span className="font-medium text-white/85">{jobTitle}</span>{" "}
                will be permanently removed.
              </>
            ) : (
              "This job will be permanently removed."
            )}{" "}
            Candidates will no longer be able to see or apply to it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="border-white/10 bg-white/4">
          <AlertDialogCancel
            variant="outline"
            className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={handleDelete}
            
            className="bg-rose-500 text-white hover:bg-rose-600"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteJobConfirmation;