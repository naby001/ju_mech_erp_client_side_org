import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import PersonalInfoForm from "../forms/personal-info-form"; // form component for hanlding the personal info
import EnrollmentDetailsForm from "../forms/enrollment-details-forms"; // form component for handling the enrollment details
import AcademicBackgroundForm from "../forms/academic-background-form"; // form component for hanlding the acedamic component details
import AcademicInfoForm from "../forms/academic-info-form"; // form component for handling the university acedamic info
import ProgressionForm from "../forms/progression-form"; // form component for handling the placement details of the student
import CoCurricularForm from "../forms/co-curricular-form"; // form component for handling the co-curricular and extra-curricular activities
import MiscellaneousForms from "../forms/miscellaneous-forms"; // form component for handling the miscellenous details of the student
// importing components
import Sidebar from "../components/Sidebar"; // sidebar component

export default function MultiStepForm({ onChange }) {
  const [activeSection, setActiveSection] = useState(0); //state to control session
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)"); // responsive state property

  //~ state object to store personal details/general info of student
  const [personalformData, setPersonalFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    category: "",
    isPwd: false,
    mobileNo: "",
    whatsappNo: "",
    email: "",
    alternateEmail: "",
    presentAddress: "",
    presentState: "",
    permanentAddress: "",
    permanentState: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    emergencyContactRelation: "",
    nationality: "",
    idType: "",
    idNumber: "",
    familyIncome: "",
  });

  //~ State to control enrollment details of the student resistered in JU
  const [enrollformData, setEnrollFormData] = useState({
    rollNumber: "",
    section: "",
    programme: "",
    isLateralEntry: false,
    admissionYear: "",
    currentSemester: "",
    currentYear: "",
    expectedGraduationYear: "",
    registrationNumber: "",
    registrationYear: "",
    mentorName: "",
    hasScholarship: false,
    scholarshipDetails: "",
  });

  //~ state to control school acedamic background details
  const [acadbackformData, setAcadBackFormData] = useState({
    secondaryMarks: "",
    secondaryYear: "",
    higherSecondaryMarks: "",
    higherSecondaryYear: "",
    mediumOfEducation: "",
    entranceExamName: "",
    entranceExamRank: "",
    entranceExamYear: "",
  });

  //~ state to control acedamic details at the university
  const [acedamicformData, setAcedamicFormData] = useState({
    grades: [
      {
        semester: 1,
        sgpa: "",
        cgpa: "",
      },
    ],
    selectedProfessional: [],
    selectedOpen: [],
    projectDetails: [
      {
        title: "",
        type: "",
        mode: "",
        duration: "",
        year: "",
        graded: false,
        supervisor: "",
        coSupervisor: "",
        institute: "",
        sdgConnection: false,
        outcome: "",
        certificates: [],
      },
    ],
    publications: {
      journalPapers: [
        {
          title: "",
          journalName: "",
          volume: "",
          pageNo: "",
          doi: "",
          firstPage: "",
        },
      ],
      conferencePapers: [
        {
          title: "",
          conferenceName: "",
          venue: "",
          dates: "",
          organizedBy: "",
        },
      ],
      patent: [
        {
          title: "",
          details: "",
          applno: "",
          patno: "",
          patcert: "",
        },
      ],
    },
  });

  //state to control placement details at the university
  const [placemenformtData, setPlacementFormData] = useState({});

  //state to control extra-curricular and co-curricular form details
  const [curricularformData, setCurricularFormData] = useState({
    clubs: [
      {
        name: "",
        role: "",
        accolades: "",
        achievements: "",
        certificate: null,
      },
    ],
    techFests: [
      {
        name: "",
        organizer: "",
        eventType: "",
        year: "",
        role: "",
        teammates: "",
        outcome: "",
        certificate: "",
      },
    ],
    leadership: [
      {
        role: "",
        details: "",
        certificate: "",
      },
    ],
    sports: [
      {
        name: "",
        level: "",
        venue: "",
        year: "",
        result: "",
        accolades: "",
        certificate: "",
      },
    ],
    skills: [
      {
        name: "",
        offeredby: "",
        mode: "",
        duration: "",
        fee: "",
        certificate: null,
      },
    ],
    socialActivities: [
      {
        name: "",
        details: "",
        date: "",
        location: "",
        certificate: null,
      },
    ],
    seminars: [
      {
        name: "",
        venue: "",
        date: "",
        organizer: "",
        certificate: null,
      },
    ],
  });

  //~ state to control misc form details
  const [miscformData, setMiscFormData] = useState({});

  //? function to handle the change in the personal info form
  const handlepersonalChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setPersonalFormData({
      ...personalformData,
      [name]: newValue,
    });
  };

  //? function to handle the change in the enrollment details form
  const handleenrollChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setEnrollFormData({
      ...enrollformData,
      [name]: newValue,
    });
  };

  //? function to handle the change in the academic background form
  const handleacadbackChange = (event) => {
    const { name, value } = event.target;

    setAcadBackFormData({
      ...acadbackformData,
      [name]: value,
    });
  };

  //? function to handle the change in the academic info form
  const handleacedamicChange = (event) => {
    const { name, value } = event.target;

    setAcedamicFormData({
      ...acedamicformData,
      [name]: value,
    });
  };

  //? function to handle the change in the placement form
  const handleCurricularChange = (event) => {
    const { name, value } = event.target;
    setCurricularFormData({
      ...curricularformData,
      [name]: value,
    });
  };

  //^ For debugging purpose (checking form details in console)
  const logStateValues = (activeComponent) => {
    console.log("Active Component:", activeComponent);
    switch (activeComponent) {
      case "General Info":
        console.log("Personal Info:", personalformData);
        break;
      case "Enrollment Details":
        console.log("Enrollment Details:", enrollformData);
        break;
      case "Academic Background":
        console.log("Academic Background:", acadbackformData);
        break;
      case "Academic Info":
        console.log("Academic Info:", acedamicformData);
        break;
      case "Placement":
        console.log("Placement Details:", placemenformtData);
        break;
      case "Co-Curricular and Extra-Curricular Activities":
        console.log(
          "Co-Curricular and Extra-Curricular Activities:",
          curricularformData
        );
        break;
      case "Miscellaneous":
        console.log("Miscellaneous:", miscformData);
        break;
      default:
        console.log("Unknown Section");
    }
  };

  //? array of dicts containing section titles and component tags
  const sections = [
    {
      title: "General Info",
      component: (
        <PersonalInfoForm
          formData={personalformData}
          handleChange={handlepersonalChange}
        />
      ),
    },
    {
      title: "Enrollment Details",
      component: (
        <EnrollmentDetailsForm
          formData={enrollformData}
          handleChange={handleenrollChange}
        />
      ),
    },
    {
      title: "Academic Background",
      component: (
        <AcademicBackgroundForm
          formData={acadbackformData}
          handleChange={handleacadbackChange}
        />
      ),
    },
    {
      title: "Academic Info",
      component: (
        <AcademicInfoForm
          formData={acedamicformData}
          handleChange={handleacedamicChange}
        />
      ),
    },
    { title: "Placement", component: <ProgressionForm /> },
    {
      title: "Co-Curricular and Extra-Curricular Activities",
      component: (
        <CoCurricularForm
          formData={curricularformData}
          handleChangeCur={handleCurricularChange}
        />
      ),
    },
    { title: "Miscellaneous", component: <MiscellaneousForms /> },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflowY: isMobile ? "auto" : "hidden",
        backgroundColor: "white",
      }}
    >
      {/* Sidebar (Desktop and Mobile) */}
      {!isMobile && (
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
      {isMobile && (
        <>
          <Navbar />
          <IconButton
            sx={{ position: "absolute", top: 16, left: 16 }}
            onClick={() => setMobileSidebarOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={mobileSidebarOpen}
            onClose={() => setMobileSidebarOpen(false)}
          >
            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </Drawer>
        </>
      )}
      {/* Form Section */}
      <Box
        key={activeSection}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: isMobile ? "50px" : "70px",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2, color: "#b70924" }}
        >
          {sections[activeSection].title}
        </Typography>

        {/* component selection based on activeSession state  */}
        {sections[activeSection].component}

        {/* If mobile use button to proeed to next page */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: "10px",
              background: "#b70924",
              color: "#fff",
              "&:hover": { background: "#90071d" },
              width: "20%",
            }}
            onClick={() =>
              setActiveSection((prev) =>
                prev < sections.length - 1 ? prev + 1 : prev
              )
            }
          >
            Next
          </Button>
          <Button
            variant="outlined"
            sx={{
              mt: 3,
              borderRadius: "10px",
              color: "#b70924",
              borderColor: "#b70924",
              "&:hover": { background: "#f5f5f5" },
              width: "20%",
            }}
            onClick={() => logStateValues(sections[activeSection].title)}
          >
            Log State
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
