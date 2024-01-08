
export const BlogCard = ({title, category, content, author}) => {
    return (
      <div className="relative sm:pl-6">
          <h2 className="text-2xl font-semibold text-center max-w-[300px] pt-5">{title}</h2>
          <h4 className="text-xs text-gray-500 absolute top-1 right-3">{category}</h4>
          <p className="text-gray-600 font-light mt-2 text-center max-w-[400px]">{content}</p>
          <span className="font-bold capitalize underline block py-2">{author}</span>
      </div>
    )
  }