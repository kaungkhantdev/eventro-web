import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
// import { formatPathToTitle } from "@/utils/format"

export function SettingTabs({
    tabs,
}: {
    tabs: {
        trigger: string
        contentData: React.ElementType
    }[]
}) {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue={tabs[0].trigger} className="gap-4 md:gap-6">
        <TabsList className=" bg-background ">
          {
            tabs.map((item, index) => (
                <TabsTrigger key={index} value={item.trigger} className="cursor-pointer mr-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:border-0 dark:data-[state=active]:bg-primary/10 dark:data-[state=active]:text-primary data-[state=active]:shadow-none capitalize">{item.trigger}</TabsTrigger>
            ))
          }
        </TabsList>
        {
            tabs.map((item, index) => (
            <TabsContent key={index} value={item.trigger}>
                <item.contentData />
            </TabsContent>
            ))
        }
      </Tabs>
    </div>
  )
}
