const CalltoAction = () => {
    return(
    
    <div className="cat-section">            
            <div className="flex flex-col items-center justify-center max-w-[700px] mx-auto h-[700px]">                        
                <div className="text-center">
                    <h3 className="mb-6 text-5xl font-bold text-slate-900 text-center">Get started with our awesome product today</h3>
                    <p className="text-xl font-normal text-slate-600">Integrated hotel & restaurant management system that helps you with business operation. 
                        Connect with your customers and supercharge your work.</p>
                </div>
                <div className="flex align-items-center justify-center mt-5">
                    <a class="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#fc5139] border-b-[#8a0202] disabled:border-0 disabled:bg-[#fc5139] disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-[#8a0202] active:text-gray-300 focus-visible:outline-[#fc5139] text-xl"
                        href="">
                        Request for Demo
                    </a>
                </div>
            </div>
    </div>

    );
}

export default CalltoAction;
