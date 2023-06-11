import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { ReactComponent as QrcodeIcon } from "../../../../src/assets/icons/Icon-metro-qrcode.svg";
import { ReactComponent as CloseIcon } from "../../../../src/assets/icons/close-icon.svg";
import QRCode from "react-qr-code";

function QrCodeModel() {
  const [open, setOpen] = React.useState(false);
  const [value, setValueQR] = React.useState(
    "blaaasbcjshdcsjhbcdjshbdcsjhbdbckjdhscb"
  );

  return (
    <Modal
      className="md:w-[600px] w-full h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className="bg-green text-white md:w-[180px] w-full rounded-full font-serifEN font-normal text-lg mt-2 ">
          View QR Code
        </Button>
      }
    >
      <Modal.Content className="md:w-[600px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[550px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3"> View Qr Code </p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <div className="w-[230px] mx-auto py-8">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
              />
            </div>
            {/* <QrcodeIcon className="mx-auto my-8" /> */}
            <div className="flex justify-center gap-x-5 py-5 mx-5">
              <Button className="bg-green text-white md:w-[180px] w-full rounded-full font-serifEN font-normal text-lg mt-2 ">
                Activation
              </Button>
              <Button className="bg-green text-white md:w-[180px] w-full rounded-full font-serifEN font-normal text-lg mt-2 ">
                Deactivation
              </Button>
            </div>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default QrCodeModel;
