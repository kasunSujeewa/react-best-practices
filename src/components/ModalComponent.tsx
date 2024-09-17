import { ReactNode } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"


interface InputProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string,
    children : ReactNode
}
 

function ModalComponent(props : InputProps) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onClose}>
      <DialogContent className="sm:max-w-md bg-black">
        {props.title && <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>}
        <div>
          {props.children}
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ModalComponent