import CountArea from "@/src/common/count-area";
import React from "react";

const FunFactArea = () => {
  return (
    <>
      <div className="tp-fun-fact-area tp-fun-fact-2 pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-fun-fact-section-title text-center pb-60">
              <div style={{ marginBottom: '3em', textAlign: 'center' }}>
                <h2 className="child-2" style={{ color: '#5b6cff', fontSize: '40px', marginBottom: '1em' }}>
                    What worked for 5 clients won't work for 500
                </h2>
                <div style={{ padding: '0 250px' }}>
                    <p style={{ color: 'rgba(1, 49, 127, 0.9)', textAlign: 'center', marginBottom: '1em' }}>
                        You have accounts, invoices, projects, and processes scattered across different tools.
                        Things get lost, and the client experience suffers.
                    </p>
                    <p style={{ color: 'rgba(1, 49, 127, 0.9)', textAlign: 'center', marginBottom:'1em' }}>
                        Your agency needs a proper system. Something to stay organized, something to grow with.
                        This is the reason we built SPP – the one platform that keeps everything in sync and helps you scale your agency.
                    </p>
                </div>
               </div>

              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default FunFactArea;
