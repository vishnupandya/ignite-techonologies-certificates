import certificateJpeg from "./assets/certificate.jpeg";
import reejaPdf from "./assets/certificate.pdf";
import igniteLogo from "./assets/ignitelogo.png";

const ReejaCertificate = () => {
  return (
    <div className="min-h-screen bg-[#eef3fb] py-6 px-3 sm:py-8 sm:px-4 lg:py-10">

      <div className="max-w-6xl mx-auto">

        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-[#0d1b52] to-[#17327e] rounded-[20px] sm:rounded-[24px] lg:rounded-[30px] p-5 sm:p-6 lg:p-8 text-white shadow-xl">

          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">

            {/* LEFT */}
            <div className="flex gap-3 sm:gap-4 lg:gap-5 items-start">

              {/* LOGO */}
              <div className="bg-white rounded-2xl p-3 lg:p-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center flex-shrink-0">
                {/* Yaha apna logo lagana */}
                <img
                  src={igniteLogo}
                  alt="logo"
                  className="w-full object-contain"
                />
              </div>

              {/* TEXT */}
              <div>

                <p className="uppercase tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] text-[9px] sm:text-[11px] lg:text-[12px] text-white/70 mb-2 lg:mb-3">
                  Internship Verification Portal
                </p>

                <h1 className="text-[28px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.2] sm:leading-[1.15] lg:leading-[55px]">
                  Ignite <br /> Technologies
                </h1>

                <p className="text-white/70 mt-2 lg:mt-4 max-w-[260px] sm:max-w-[400px] lg:max-w-[500px] leading-6 sm:leading-7 text-xs sm:text-sm">
                  Internship credential access portal for academic
                  verification and internship validation.
                </p>

              </div>
            </div>

            {/* RIGHT STATUS */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 w-full lg:min-w-[260px] lg:h-fit border border-white/10">

              <p className="text-white/70 text-xs sm:text-sm">
                Record Status
              </p>

              <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-[#57d86d] mt-2 lg:mt-3 leading-tight">
                Document <br /> Available
              </h2>

              <p className="text-white/60 mt-2 lg:mt-3 text-xs sm:text-sm">
                Student internship record available.
              </p>

            </div>
          </div>
        </div>

        {/* GRID CONTAINER FOR VERIFICATION & STUDENT RECORD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 mt-5 sm:mt-6 lg:mt-8 items-start">

          {/* VERIFICATION INFORMATION */}
          <div className="lg:col-span-1 bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-5 sm:p-6 lg:p-8 shadow-md">

            <h2 className="text-[20px] sm:text-[26px] lg:text-[34px] font-bold text-[#111827] mb-5 sm:mb-6 lg:mb-8">
              Verification Information
            </h2>

            <div className="space-y-4 sm:space-y-5 lg:space-y-6">

              <div className="flex justify-between border-b border-gray-200 pb-3 sm:pb-4">
                <span className="text-gray-500 text-xs sm:text-sm lg:text-base">
                  Status
                </span>
                <span className="font-semibold text-[#16a34a] text-xs sm:text-sm lg:text-base">
                  Document Available
                </span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-3 sm:pb-4">
                <span className="text-gray-500 text-xs sm:text-sm lg:text-base">
                  Document Access
                </span>
                <span className="font-semibold text-[#111827] text-xs sm:text-sm lg:text-base">
                  Available
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-xs sm:text-sm lg:text-base">
                  Last Updated
                </span>
                <span className="font-semibold text-[#111827] text-xs sm:text-sm lg:text-base">
                  May 2026
                </span>
              </div>

            </div>
          </div>

          {/* STUDENT RECORD */}
          <div className="lg:col-span-2 bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] shadow-md overflow-hidden">

            <div className="p-5 sm:p-6 lg:p-8 border-b border-gray-200">

              <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-bold text-[#111827]">
                Student Internship Record
              </h2>

              <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm">
                Academic internship information
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 p-5 sm:p-6 lg:p-8">

              {/* LEFT */}
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    Student Name
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#111827] mt-1">
                    Reeja Baweja
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    College
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#111827] mt-1">
                    Poddar International College
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    Start Date
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#111827] mt-1">
                    1 April 2026
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    Issued By
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#111827] mt-1">
                    Ignite Technologies
                  </h3>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    Course
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#111827] mt-1">
                    BBA
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    Internship Role
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#111827] mt-1">
                    HR Intern
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    End Date
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#111827] mt-1">
                    30 April 2026
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm">
                    Record Status
                  </p>
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold text-[#16a34a] mt-1">
                    Document Available
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* PDF SECTION */}
        <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] shadow-md mt-5 sm:mt-6 lg:mt-8 overflow-hidden">

          <div className="p-5 sm:p-6 lg:p-8 border-b border-gray-200">
            <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-bold text-[#111827]">
              Internship Certificate
            </h2>
          </div>

          <div className="p-5 sm:p-6 lg:p-8">

            {/* PDF TOPBAR */}
            <div className="bg-[#0b1220] text-white rounded-t-[16px] sm:rounded-t-[20px] lg:rounded-t-[24px] px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 flex justify-between items-center gap-3">

              <div>
                <h3 className="font-semibold text-[13px] sm:text-[15px] lg:text-lg">
                  Internship Certificate Preview
                </h3>
                <p className="text-[11px] sm:text-sm text-white/60 mt-1">
                  PDF document viewer
                </p>
              </div>

              <a
                href={reejaPdf}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm flex-shrink-0 whitespace-nowrap hover:bg-gray-100 transition"
              >
                Open Fullscreen
              </a>

            </div>

            {/* PDF PREVIEW WITH SCROLLBARS AND IMAGE */}
            <div className="w-full h-[400px] sm:h-[600px] lg:h-[800px] border border-gray-200 border-t-0 rounded-b-[16px] sm:rounded-b-[20px] lg:rounded-b-[24px] overflow-y-auto overflow-x-hidden bg-[#f8fafc] p-0 flex justify-center items-start">
              <img
                src={certificateJpeg}
                alt="Internship Certificate Preview"
                className="w-full h-auto"
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-6">
              <a
                href={certificateJpeg}
                target="_blank"
                rel="noreferrer"
                className="bg-[#0b3a98] hover:bg-[#092d77] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors text-center inline-block cursor-pointer"
              >
                Open Certificate
              </a>
              <a
                href={reejaPdf}
                download="Reeja_Baweja_Certificate.pdf"
                className="bg-[#e5e7eb] hover:bg-[#d1d5db] text-gray-800 px-6 py-3 rounded-xl font-semibold text-sm transition-colors text-center inline-block cursor-pointer"
              >
                Download PDF
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ReejaCertificate;