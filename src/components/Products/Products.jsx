
import { MdOutlineStarPurple500 } from "react-icons/md"
import { Divider } from "@heroui/divider"
import { Tabs, Tab } from "@heroui/tabs"
import { Button } from "../ui/button"
import { TiShoppingCart } from "react-icons/ti"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { useState } from "react"
const Products = () => {
  const [table, setTable] = useState(false);
  const tableDataOne = [
    {
      tablets: "28",
      price: "$120",
      preTablet: "$2.9",
    },
    {
      tablets: "96",
      price: "$180",
      preTablet: "$9.9",
    },
    {
      tablets: "69",
      price: "$160",
      preTablet: "$1.2",
      offer: true,
    },
    {
      tablets: "69",
      price: "$600",
      preTablet: "$15.0",
    },
    {
      tablets: "33",
      price: "$196",
      preTablet: "$0.8",
      offer: true,
    },
  ]
  const tableDataTwo = [
    {
      tablets: "25",
      price: "$160",
      preTablet: "$6.4",
      offer: true,
    },
    {
      tablets: "16",
      price: "$600",
      preTablet: "$2.6",
    },
    {
      tablets: "89",
      price: "$69",
      preTablet: "$4.1",
      offer: true,
    },
    {
      tablets: "45",
      price: "$200",
      preTablet: "$14.1",
    },
    {
      tablets: "61",
      price: "$996",
      preTablet: "$20.4",
    },
  ]
  const handleChangeTabStates = () => {
    setTable((prev) => (!prev));
  }
  return (
    <div className="xl:w-[1250px] mx-auto mt-[2px] px-2 lg:px-0">
      <div>
        {/* BREADCRUMB SECTION START */}
        <Breadcrumb className="bg-gray-200 py-3 px-2 rounded ">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/">Home</a>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbLink asChild>
                <a href="/product">Product</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* BREADCRUMB SECTION END */}
        <Divider className="my-4 text-xl" />
        {/* BODY START */}
        <div>
          <div className="space-y-6 md:space-y-1 flex flex-col md:flex-row justify-start md:justify-between ">
            <h1 className="text-xl sm:text-3xl">Slepeeing Pills</h1>
            <div className={`border border-dashed mr-3 w-full md:w-80 border-black space-x-4 rounded-lg bg-[#F7F7F7] py-2 flex justify-between px-6`}>
              <div className="sm:text-[17px] font-semibold uppercase">
                <p>Get 10% off on </p> <p>every order!</p>
              </div>
              <div>
                <p className="uppercase text-center text-xs sm:text-xl">
                  Apply Code
                </p>
                <p className="bg-gray-900 text-white px-4 py-1 uppercase font-semibold text-xl border border-dashed">
                  SLEEP2025
                </p>
              </div>
            </div>
          </div>
          {/* REVIEW START */}
          <div className="flex items-center pt-2 md:pt-0">
            <div className="flex items-center space-x-1">
              <MdOutlineStarPurple500 className="text-xl font-semibold text-yellow-300" />
              <MdOutlineStarPurple500 className="text-xl font-semibold text-yellow-300" />
              <MdOutlineStarPurple500 className="text-xl font-semibold text-yellow-300" />
              <MdOutlineStarPurple500 className="text-xl font-semibold text-yellow-300" />
              <MdOutlineStarPurple500 className="text-xl font-semibold text-yellow-300" />
            </div>
            <p>(1review)</p>

          </div>
          {/* REVIEW END */}
          {/* TABS START */}
          <div className="flex flex-col sm:flex-row md:items-center lg:items-start justify-start sm:justify-between mt-2 sm:space-x-8 space-y-2 sm:space-y-0">
            {/* IMAGES  START  */}
            <div className="border border-gray-300 p-3 w-full sm:w-[50%] mx-auto">
              {
                table ? <img src="https://www.sleepingpillsuk.com/product-img/zopiclone.png" alt="image" /> : <img src="https://www.sleepingpillsuk.com/product-img/zop_10mg.png" alt="10mg-pills" />}
            </div>
            {/* IMAGES  END  */}
            {/* TABS SECTION START */}
            <div className="sm:w-[50%]">
              <Tabs onSelectionChange={() => handleChangeTabStates()} radius="none" aria-label="Tabs radius" fullWidth color="danger">
                <Tab key="disablesKey" isDisabled="true" title="select-streanth" />
                <Tab key="7.5mg" title="7.5mg" />
                <Tab key="10mg" title="10mg" />
              </Tabs>
              {/* TABLE START */}
              <table className="border w-full mt-2">
                <thead className="">
                  <tr className="space-x-2 p-5 bg-[#184971] text-white text-sm font-semibold ">
                    <th className="border-r-1 p-1">Tables</th>
                    <th className="border-r-1 p-1">Total Price</th>
                    <th className="border-r-1 p-1">Per Tablet</th>
                    <th className="border-l-1 p-1">Add to cart</th>
                  </tr>
                </thead>
                <tbody>
                  {!!table ? tableDataOne?.map(item => {
                    return (<tr key={item.tablets} className="border">
                      <td className="border text-center">{item?.tablets}</td>
                      <td className="border text-center">{item?.price}</td>
                      <td className="border text-center">{item?.preTablet}</td>
                      <td className="border text-center">
                        <Button className="max-w-36 mx-auto uppercase font-semibold flex items-center space-x-1">
                          <span className="text-xl">
                            <TiShoppingCart />
                          </span>
                          <p>Buy Now</p>
                        </Button>
                      </td>
                    </tr>)
                  }) : tableDataTwo?.map(towItems => {
                    return (<tr key={towItems.offer} className="border">
                      <td className="border text-center">{towItems?.tablets}</td>
                      <td className="border text-center">{towItems?.price}</td>
                      <td className="border text-center">{towItems?.preTablet}</td>
                      <td className="border text-center">
                        <Button className="max-w-36 mx-auto uppercase font-semibold flex items-center space-x-1">
                          <span className="text-xl">
                            <TiShoppingCart />
                          </span>
                          <p>Buy Now</p>
                        </Button>
                      </td>
                    </tr>)
                  })}

                </tbody>
              </table>
              {/* TABLE END */}
            </div>
            {/* TABS SECTION END */}
          </div>
          {/** TABS END **/}
          <Divider className="my-4 text-xl" />
          {/* DESCRIPTIONS */}
          <div>
            <Button className="rounded-t-lg rounded-b-none">Descriptions</Button>
            <div className="border bg-gray-100 px-2 sm:p-4 mt-1">
              <section className="space-y-2">
                <h1 className="text-xl font-semibold">What is Zopiclone?</h1>
                <p>Zopiclone tablets are often referred to as a z-medication and are the most popular medication used globally for the treatment of insomnia. While zopiclone is both the active ingredient and the name of the medication when sold in generic form, this medicine also goes under the trade names of Imovane, Zimovane and Datolan. Zopiclone is a very powerful sedative hypnotic medication that works by quickly promoting sleep in people who are struggling to sleep at night. This medication is usually used as a short-term treatment for insomnia and other disorders that affect sleep.</p>
              </section>
              <section className="space-y-2">
                <h1 className="text-xl font-semibold">How Zopiclone Tablets Work</h1>
                <p>Zopiclone, although considered a non-benzodiazepine medication, has a very similar mechanism of action as that of benzodiazepines (which all work very similarly). To promote sleep, patients who buy zopiclone medication online should take it around 30 minutes before bedtime. The medication is than assimilated by the body and attaches itself to gamma aminobutyric acid (GABA) neuro transmitters in the brain. The role of GABA is to regulate neural activity and ensure that the central nervous system remains in a state of relative harmony. This medication allows GABA to perform its function more swiftly to promote feelings of calmness and sedation in the brain in order to enable uninterrupted sleep for the duration of the night.</p>
              </section>
              <section className="space-y-2">
                <h1 className="text-xl font-semibold">When is it Right to use Zopiclone?</h1>
                <p>Zopiclone, although considered a non-benzodiazepine medication, has a very similar mechanism of action as that of benzodiazepines (which all work very similarly). To promote sleep, patients who buy zopiclone medication online should take it around 30 minutes before bedtime. The medication is than assimilated by the body and attaches itself to gamma aminobutyric acid (GABA) neuro transmitters in the brain. The role of GABA is to regulate neural activity and ensure that the central nervous system remains in a state of relative harmony. This medication allows GABA to perform its function more swiftly to promote feelings of calmness and sedation in the brain in order to enable uninterrupted sleep for the duration of the night.</p>
              </section>
              <section className="space-y-2">
                <h1 className="text-xl font-semibold">What Side Effects are Associated with Zopiclone Use?</h1>
                <p>Zopiclone, although considered a non-benzodiazepine medication, has a very similar mechanism of action as that of benzodiazepines (which all work very similarly). To promote sleep, patients who buy zopiclone medication online should take it around 30 minutes before bedtime. The medication is than assimilated by the body and attaches itself to gamma aminobutyric acid (GABA) neuro transmitters in the brain. The role of GABA is to regulate neural activity and ensure that the central nervous system remains in a state of relative harmony. This medication allows GABA to perform its function more swiftly to promote feelings of calmness and sedation in the brain in order to enable uninterrupted sleep for the duration of the night.</p>
              </section>
            </div>
          </div>
        </div>
        {/* BODY END */}
      </div>
    </div>
  )
}
export default Products;