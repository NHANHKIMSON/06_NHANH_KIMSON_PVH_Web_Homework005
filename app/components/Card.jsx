export default function Card() {
  return (
    <div
      className="relative max-w-[314px] w-full h-[398px] overflow-hidden rounded-xl text-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/c73c/a81c/dd317b2dcd79328efc4e3095489f2244?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sop1LVQptT1zML-GVA9Q0ZDt5qkU4Apx6H9tTIZMvD9WfErQZZlubZI2SZBsPUiV-QgL5JR9VsAS6JgrjHBXt1SESaIVXrBFmThQkQwLVyxHmduniVAefQv6SVsNWMGnc-B7H6NYa0Xfe2UXRKPtt4YiDOZ1A~yE0TJUU9eOH2LUI9Sv0eygEjNy5BMuztUfPGXrGILhJOvh0fDcCI9Dlal0Bu8f7qWrZEA3WZ2~w2-Z3ben~QQRt-vz9gYO0ZsA8F4rJGDlBlDY8M2oUopxsCUND9VVyVF8VNeMcgViCSP94gidrM8hqGX60XmHafNwPvrogafTyPhZGmRI24LxZg__')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
    </div>
  );
}
