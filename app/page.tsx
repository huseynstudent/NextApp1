import Image from "next/image";

export default function Home() {
return (
  <div>
    <div className="flex rounded-3xl h-100 w-200 overflow-hidden border-2">
      <div className="flex w-1/3 justify-center items-center bg-sky-500">
        <Image
          src="https://umbrellacreative.com.au/why-you-shouldnt-use-stock-photos/"
          alt="image"
          width={150}
          height={150}
          className="rounded-full object-cover w-42"
        />
      </div>
    </div>
    <div className="flex px-8 py-6 bg-white w-2/3">
      <div className="flex justify-between w-full items-start">
        <h1 className="text-sky-500 text-2xl font-bold">Sarah Anderson</h1>
        <div className="rounded-full bg-[#D2E1FF] px-4 py-2">
          <p className="text-sky-500 text-sm">Product Designer</p>
        </div>
      </div>
    </div>

<div className="flex border-t border-t-gray-500 w-full py-4">
  <div className="flex justify-between">
    <div className="flex gap-2">
      <div className="bg-sky-600 rounded-full p-2">
        <ZapIcon className="w-4 h-4" />
      </div>
      <div className="bg-sky-600 rounded-full p-2">
        <MessageCircle className="w-4 h-4" />
      </div>
      <div className="bg-sky-600 rounded-full p-2">
        <Globe className="w-4 h-4" />
      </div>
    </div>
  </div>
</div>
</div>
);
}
