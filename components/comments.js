import {DateTime} from "/node_modules/luxon/build/es6/luxon";

export default function Comments({comments}){
    return(
        <div  className="mt-10 mb-48 space-y-6">
            {comments.map(({ id, createdAt, text, user}) => {
                return (
                    <div key={id} className="flex items-center  space-x-6 border border-normal-blue rounded-xl p-4">

                        <img src={user.picture} width={70} className="rounded-full" alt=""/>
                        <div className="space-y-1">
                            <div className="space-x-4">
                                <b className="text-light-blue text-lg raleway-semibold">{user.name}</b>
                                <time className="text-slate-600 raleway-light">{DateTime.fromMillis(createdAt).toRelative()}</time>
                            </div>
                            <p className="text-normal-blue text-[1.04rem] raleway-md">{text}</p>


                        </div>


                    </div>

                )
            })}
        </div>
    )
}