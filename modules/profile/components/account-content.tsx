import { Button } from "@/components/ui/button"

export default function AccountContent () {
  return (
    <div className="w-full">
        <div className="pb-2 border-b border-gray-100 dark:border-gray-900">
            <h2 className="">Account</h2>
        </div>
        
        {/* Photo */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Photo</span>
            </div>
            <div className="col-span-2 lg:col-span-3">
                <img 
                    src="https://github.com/shadcn.png"
                    alt="Profile" 
                    className="w-11 h-11 rounded-lg object-cover"
                />
            </div>
            <div className="col-span-1 text-end">
            <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>
        
        {/* Name */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Name</span>
            </div>
            <div className="col-span-2 lg:col-span-3">
                <span className="text-sm">Sophie Chamberlain</span>
            </div>
            <div className="col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>

        {/* Email Address */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Email Address</span>
            </div>
            <div className="col-span-2 lg:col-span-3 overflow-hidden">
                <span className="text-sm text-wrap">hi@sophiehamberlain.com</span>
            </div>
            <div className="col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>

        {/* Linked team account */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Linked team account</span>
                <br />
                <span className="text-sm text-muted-foreground">
                    Easily switch between <br className="lg:hidden" /> them and access <br /> both accounts from any device.
                </span>
            </div>
            <div className="col-span-1 lg:col-span-3">
               <img 
                    src="https://github.com/shadcn.png"
                    alt="Profile" 
                    className="w-11 h-11 rounded-full object-cover"
                />
            </div>
            <div className="col-span-2 lg:col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Manage Team</Button>
            </div>
        </div>
    </div>
  )
}

