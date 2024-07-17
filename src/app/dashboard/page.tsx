'use client'

import { Button } from "@/components/ui/button";
import { Plus, Power } from "lucide-react";


// const chartData = [
//   { formStatus: "active", count: 275, fill: "var(--color-active)" },
//   { formStatus: "inactive", count: 200, fill: "var(--color-inactive)" },
// ]

// const chartConfig = {
//   active: {
//     label: "active",
//     color: "seagreen",
//   },
//   inactive: {
//     label: "inactive",
//     color: "tomato",
//   }
// } satisfies ChartConfig

// const hchart = [
//   { formName: 'one', responses: 100 },
//   { formName: 'two', responses: 300 },
//   { formName: 'three', responses: 600 }
// ]
// const hconfig = {
//   views: {
//     label: 'Responses'
//   },
//   responses: {
//     label: 'Responses',
//     color: 'tomato'
//   }
// }

export default function DashboardPage() {

  // const total = React.useMemo(() => {
  //   return chartData.reduce((acc, curr) => acc + curr.count, 0)
  // }, [])

  return (
    <div className="w-screen h-screen p-4 flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <h4>Forms</h4>
        <span className="space-x-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Form
          </Button>
          <Button variant='secondary' size='icon' className="group hover:bg-destructive/10">
            <Power className="w-4 h-4 group-hover:text-destructive" />
          </Button>
        </span>
      </div>
    </div>
  )
}


{/* <div className="grid grid-cols-1 gap-8 !max-h-[500px]">
  <span className="min-w-[300px]">
    <DonutChart
      title="Forms status"
      dataKey="count"
      nameKey="formStatus"
      data={chartData}
      config={chartConfig}
      total={total}
    />
  </span>
  <HorizontalBarChart
    title="Form responses"
    dataKey="responses"
    nameKey="formName"
    data={hchart}
    config={hconfig}
  />
</div> */}
