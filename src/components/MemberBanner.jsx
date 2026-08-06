import { Sparkles } from "lucide-react";

export default function MemberBanner() {
  return (
    <div className="flex min-h-[72px] items-center justify-center rounded-lg bg-[#1ABA1A] px-4 py-7 text-center text-base font-medium text-white sm:min-h-[88px] sm:text-lg">
      🎉 Member get <b className="mx-1">FREE SHIPPING</b> with no order minimum!
      <span className="ml-2 cursor-pointer underline">
        Try free 30-days trial!
      </span>
    </div>
  );
}