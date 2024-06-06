import Image from "next/image";

export default function loading() {
    return (
        <div className="flex h-screen w-screen justify-center items-center">
        <Image
              width={200}
              height={200}
              alt={"dog with tongue out"}
            //   className=" w-auto h-12"
              src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1717159639/dog-tongue-out_wbvyf7.gif"
              />
        </div>
    )
}
