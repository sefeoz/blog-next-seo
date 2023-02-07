import {DateTime} from "/node_modules/luxon/build/es6/luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function Comments({comments}){
    
    return(
        <div  className="mt-10 mb-48 space-y-6">
            {comments.map(({ id, createdAt, text, user,btn}) => {
                console.log(id)
                return (
                    <div key={id} className="flex items-center justify-between border border-normal-blue rounded-xl ">
                        <div  className={"flex items-center justify-between space-x-6 p-4"}>
                         <img src={user.picture} width={70} className="rounded-full" alt=""/>
                            <div className="space-y-1">
                                <div className="space-x-4">
                                    <b className="text-light-blue text-lg raleway-semibold">{user.name}</b>
                                    <time className="text-slate-600 raleway-light">{ DateTime.fromMillis(createdAt).toRelative()}</time>
                                </div>
                                <p className="text-normal-blue text-[1.04rem] raleway-md">{text}</p>
                                
                            </div>

                        </div>
                        <div key={btn} id="remove">
                            <button id="btn">
                                <FontAwesomeIcon icon={faX}  className={"text-light-blue mr-5"}/>
                            </button>

                        </div>

                    </div>

            )
            })}
        </div>
    )
}