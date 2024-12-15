import PeeButton from "./PeeButton";
import PoopButton from "./PoopButton";

export default function ToiletButtons() {
    return (
        <div className="flex gap-10">
            <PeeButton />
            <PoopButton />
        </div>
    )
}