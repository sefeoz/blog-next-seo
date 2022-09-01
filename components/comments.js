import {DateTime} from "/node_modules/luxon/build/es6/luxon";

export default function Comments({comments}){
    return(
        <div  className="mt-10 mb-48 space-y-6">
            {comments.map(({ id, createdAt, text, user }) => {
                return (
                    <div key={id} className="flex items-center  space-x-6 border rounded-xl p-4">

                        <img src={user.picture} width={70} className="rounded-full" alt=""/>
                        <div className="space-y-1">
                            <div className="space-x-4">
                                <b className="text-gray-200 text-lg">{user.name}</b>
                                <time className="text-gray-500">{DateTime.fromMillis(createdAt).toRelative()}</time>
                            </div>
                            <p className="text-zinc-200 text-[1.04rem]">{text}</p>


                        </div>


                    </div>

                )
            })}
        </div>
    )
}