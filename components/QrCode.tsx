import { QRCodeSVG } from "qrcode.react";
import useStore from "./store";
function QrCode({ value }: { value: string }) {
  const QRCodeSize = useStore((state) => state.QRCodeSize);
  const npubPrefix = useStore((state) => state.npubPrefix);
  return (
    <div
      style={{ width: `${QRCodeSize}%` }}
      className="p-2 rounded-3xl shadow-sm aspect-square max-w-full"
    >
      <QRCodeSVG className="w-full h-full" value={npubPrefix + value} />
    </div>
  );
}

export default QrCode;
