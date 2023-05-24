import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { ReactComponent as QrcodeIcon } from "../../../../src/assets/icons/Icon-metro-qrcode.svg";
import { ReactComponent as CloseIcon } from "../../../../src/assets/icons/close-icon.svg";

function QrCodeModel() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      className="w-[600px] h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className="bg-green text-white w-[180px] rounded-full font-serifEN font-normal text-lg mt-2 ">
          View QR Code
        </Button>
      }
    >
      <Modal.Content className="w-[600px] h-auto bg-background-sub rounded-lg">
        <div className="bg-white w-[550px] h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3"> View Qr Code </p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <div>
              <QrcodeIcon className="mx-auto my-8" />
            </div>
            <div className="flex justify-center gap-x-5 py-5">
              <Button className="bg-green text-white w-[180px] rounded-full font-serifEN font-normal text-lg mt-2 ">
                Activation
              </Button>
              <Button className="bg-green text-white w-[180px] rounded-full font-serifEN font-normal text-lg mt-2 ">
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
