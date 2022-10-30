export abstract class UrlEndpoints {
  //======================================= SHARED  =======================================

  static readonly POST_LOCATION: string = ' ';

  //======================================= Module X =======================================
  // Order
  static readonly GET_TEST: string = 'test';

  // USer List
  static readonly GET_WaitingRiskApprovalList: string = 'api/LandingPage/ProfilePlus';
  static readonly GET_ReviwList: string = 'api/LandingPage/ReviewProfilePlus';
  static readonly GET_RejectedProfilePlusList: string = 'api/LandingPage/RejectedProfilePlus';
  

  static readonly GET_PermanentRejectedProfilePlusList: string = 'api/LandingPage/PermanentRejectedProfilePlus';
  static readonly Get_ClientActivation: string = 'Risk/ClientActivation?mobileNumber=';
  static readonly GET_RiskRejectedOnlyList: string = 'api/LandingPage/ProfilePlus?isRejectedOnly='+true;

  static readonly GET_UserById: string = 'Risk/GetUserDocumentsByClientId?MobileNumber=';
  static readonly POST_ApproveUser: string = 'Risk/Approve';
  static readonly Edit_RiskLimit: string = 'Risk/EditRiskLimt';


  // Reject Response
  static readonly GET_RejectResponse: string = 'Risk/RejectResponse';


//System Configuration

static readonly GET_SystemConfiguration: string = 'api/SystemConfiguration/GetSystemConfiguration';
static readonly Update_SystemCoreConfiguration: string = 'api/SystemConfiguration/UpdateSystemCoreConfiguration';
static readonly Get_SystemConfigurationProfessionsList: string = 'api/SystemConfiguration/GetSystemConfigurationProfessionsList';

static readonly Get_SystemConfigurationProfessionsById: string = 'api/SystemConfiguration/GetSystemConfigurationProfessionsById?Id=';
static readonly Get_SystemRejectionReasonById: string = 'api/SystemConfiguration/GetSystemConfigurationRiskRejectionReasonById?Id=';


static readonly Get_SystemConfigurationRejectionReasonList: string = 'api/SystemConfiguration/GetSystemConfigurationRiskRejectionReasonList';

static readonly post_CreateSystemConfiguration: string = 'api/SystemConfiguration/CreateSystemConfigurationProfessions';
static readonly post_CreateSystemRejectionReason: string = 'api/SystemConfiguration/CreateSystemConfigurationRiskRejectionReason';

static readonly Get_DeleteSystemConfigurationProfessionsById: string = 'api/SystemConfiguration/deleteSystemConfigurationProfessionsById';
static readonly Get_DeleteSystemRiskRejectionReasonById: string = 'api/SystemConfiguration/DeleteSystemConfigurationRiskRejectionReasonById';

static readonly Get_ActiveSystemConfigurationProfessionsById: string = 'api/SystemConfiguration/ActiveSystemConfigurationProfessionsById';
static readonly Get_ActiveSystemConfigurationRiskRejectionReasonById: string = 'api/SystemConfiguration/ActiveSystemConfigurationRiskRejectionReasonById';

static readonly post_UpdateSystemConfigurationProfessions: string = 'api/SystemConfiguration/UpdateSystemConfigurationProfessions';
static readonly post_UpdateSystemConfiguratioRejectionReason: string = 'api/SystemConfiguration/updateSystemConfigurationRiskRejectionReason';



 // LookUps
 static readonly GET_ClubIds: string = 'api/LookUps/ClubIds';
 static readonly POST_ClubId: string = 'api/LookUps/ClubId';
 static readonly GET_CarBrand: string = 'api/LookUps/CarBrands';
 static readonly POST_CarBrand: string = 'api/LookUps/CarBrand';
 static readonly POST_CarModel: string = 'api/LookUps/CarModel';
 static readonly GET_Governorates: string = 'api/LookUps/Governorates';
 static readonly GET_EmploymentTypes: string = 'api/LookUps/EmploymentTypes';

  // POST_TOKEN_AUTH:
  static readonly POST_TOKEN_AUTH: string = "api/Auth/Risklogin";

  // Rating (questions)
  static readonly GET_QUESTIONS: string = 'services/app/Questions/GetAll';
  static readonly ADD_QUESTION: string = 'services/app/Questions/CreateOrEdit/';
  static readonly DELETE_QUESTION: string = 'services/app/Questions/Delete?Id=';
  static readonly GET_QUESTION_FOREDIT: string = 'services/app/Questions/GetQuestionForEdit?Id=';

  static readonly UPDATE_QUESTIONS: string = ' ';;

  // School Level For Table Dropdown
  static readonly GET_SCHOOLLEVELFORDROPDOWN: string = 'services/app/Questions/GetAllSchoolLevelForTableDropdown';

  //  Semester For Table Dropdown
  static readonly GET_SEMESTERFORDROPDOWN: string = 'services/app/Questions/GetAllSemesterForTableDropdown';

  //  Subject For Table Dropdown
  static readonly GET_SUBJECTFORDROPDOWN: string = 'services/app/Questions/GetAllSubjectForTableDropdown';

  //  Lesson For Table Dropdown
  static readonly GET_LESSONFORDROPDOWN: string = 'services/app/Questions/GetAllLessonForTableDropdown';

  //  Questions Difficalty For Table Dropdown
  static readonly GET_QUESTIONSDIFFICALTYFORDROPDOWN: string = 'services/app/Questions/GetAllQuestionsDifficaltyForTableDropdown';


}
