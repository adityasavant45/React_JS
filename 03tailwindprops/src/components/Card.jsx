function Card(props) {
    console.log(props)
  return (
  <>
  <div className="w-[400px] h-[400px] rounded-md shadow-md bg-black text-gray-100 ">
  <img
    src="https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg"
    alt=""
    className="object-cover object-center w-full h-[60%] rounded-t-md bg-gray-500"
  />
  <div className="flex flex-col justify-between p-4 h-[40%]">
    <div className="space-y-1">
      <h2 className="text-lg font-semibold tracking-wide"></h2>
      <p className="text-gray-400 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora soluta amet corporis.
      </p>
    </div>
    <button
      type="button"
      className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 text-sm"
    >
      Read more
    </button>
  </div>
</div>

  </>
  )
}

export default Card