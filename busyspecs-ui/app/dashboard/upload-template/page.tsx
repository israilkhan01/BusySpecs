// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <div className="rest mx-3">
            <div className="px-10 shadow-lg rounded h-full py-8 bg-[#ffffffe0] backdrop-filter backdrop-blur-md backdrop-saturate-50">
                <h1 className="text-lg font-bold">Upload Files</h1>
                <form encType="multipart/form-data">
                    <div>
                        <h1 className="text-blue-600 font-medium">
                            Prefrences
                        </h1>
           </div>
            <div className="my-2 flex justify-center rounded-lg text-slate-500 py-4 border-2 border-dashed border-black-800">
                        <input className="absolute opacity-0 cursor-pointer" type="file" id="fileInput" name="files[]" multiple  />
                        <p> Drag and Drop or <span className="text-blue-600 font-semibold">Chose files</span></p>
            </div>
            <li className="list-none p-4 bg-slate-100 rounded-lg">
                <div className="flex justify-between mb-2">
                    <span>
                
                    <i className="fas fa-file-code"></i> Filename 
                    </span>
                    <span>Delete</span>
                </div>
                <div>
                    Uploading...
                </div>
            </li>
                </form>
       
           </div>
            
            </div>
    )
  }