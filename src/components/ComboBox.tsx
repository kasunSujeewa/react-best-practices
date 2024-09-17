import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface optionsProps {
  value: string;
  label: string;
}

interface InputProps {
    data: Array<optionsProps>;
    children: string
}
 

const ComboBox = ({data,children}: InputProps) => {
    const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  
  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[200px] justify-between bg-black"
      >
        {value
          ? data.find((inputVal) => inputVal.value === value)?.label
          : children}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder={children} />
        <CommandList>
          <CommandEmpty>No data found.</CommandEmpty>
          <CommandGroup>
            {data.map((inputVal) => (
              <CommandItem
                key={inputVal.value}
                value={inputVal.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === inputVal.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {inputVal.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
  )
}

export default ComboBox