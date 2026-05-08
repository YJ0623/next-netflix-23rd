import Image from "next/image";
import PlusIcon from '@/public/icon_plus.svg';
import PlayIcon from '@/public/icon_play.svg';
import InfoIcon from '@/public/icon_info.svg';

export default function PlayBar() {
    return (
        <div className="flex w-64 h-11 justify-center items-center gap-11 shrink-0">
            <div className="flex flex-col w-9.5 justify-center items-center gap-0.5 shrink-0">
                <PlusIcon width={24} height={24} />
                <span className="text-caption1 text-white">My List</span>
            </div>
            <div className="flex justify-center items-center w-27 h-full rounded-sm bg-gray-600">
                <PlayIcon width={14} height={18} />
                <span className="text-label1">Play</span>
            </div>
            <div className="flex flex-col w-9.5 justify-center items-center gap-0.5 shrink-0">
                <InfoIcon width={24} height={24} />
                <span className="text-caption1 text-white">Info</span>
            </div>
        </div>
    )
}