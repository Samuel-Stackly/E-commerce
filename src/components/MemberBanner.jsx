import { Sparkles } from "lucide-react";

export default function MemberBanner() {
  return (
    <div className="bg-[#1ABA1A] text-white text-center py-5 font-medium rounded-lg">
      🎉 Member get <b>FREE SHIPPING</b> with no order minimum!
      <span className="underline ml-2 cursor-pointer">
        Try free 30-days trial!
      </span>
    </div>
  );
}