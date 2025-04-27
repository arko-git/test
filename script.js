const quizQuestions = [
    {
        question: "Which of the following actions can be executed in transaction Edit Profile Parameters (RZ11)?",
        note: "There are 2 correct answers to this question.",
        options: {
            A: "Download values of all profile parameters in one step.",
            B: "Display the value of individual profile parameters.",
            C: "Set new values for profile parameters in profile files.",
            D: "Change values of dynamic profile parameters."
        },
        correctAnswer: ["B", "D"],
        type: "multiple" // 'single' or 'multiple'
    },
    {
        question: "Which entity contain authorizations for users in an AS ABAPbased SAP system?",
        note: "",
        options: {
            A: "Single role",
            B: "Composite role",
            C: "Authorization profile",
            D: "Authorization object"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "Which of the following is a command line tool to start or stop SAP systems and SAP instances?",
        note: "",
        options: {
            A: "Icmon.",
            B: "JSmon.",
            C: "SAPControl.",
            D: "SAP MC"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "When importing a transport request, which steps are executed by a batch job?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Import of dictionary objects",
            B: "Distribution",
            C: "Activation of dictionary objects",
            D: "Move nametab",
            E: "Activation of ABAP programs"
        },
        correctAnswer: ["B", "C", "D"],
        type: "multiple"
    },
    {
        question: "You are using a Change and Transport System (CTS) for the transport of native SAP HANA applications. Which tool can you use to create a transport request for these applications in the CTS system?",
        note: "",
        options: {
            A: "Transport Organizer Web UI (in transaction STMS)",
            B: "Transport Organizer (Extended View) (in transaction SE01)",
            C: "Transport Organizer (in transaction SE09)",
            D: "Database Assistant (in transaction DB50N)"
        },
        correctAnswer: ["A"],
        type: "single"
    },
     {
        question: "When performing a local client copy with transaction SCCLN, in which client is it recommended to start the client copy?",
        note: "",
        options: {
            A: "A client different from both the source and the target client",
            B: "The source client",
            C: "The target client"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "How are savepoints triggered?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "By performing a database backup",
            B: "By a database soft shutdown",
            C: "By issuing a transactional commit",
            D: "By performing a delta merge"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "What can you do to determine the SAPUI5 patch level in an AS ABAP-based SAP system?",
        note: "",
        options: {
            A: "Execute the ICF service /sap/public/bc/ui5_ui5",
            B: "Check the version of software component SAP_UI",
            C: "Use the program WDG_MAINTAIN_UR_MIMES",
            D: "Use the program /UI5/UI5_UPLOAD_PATCH_TO_MIME"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "What actions can you perform using the SAP_FIORI_FOUNDATION_S4 task list?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Schedule a job for calculation of SAPUI5 application index.",
            B: "Generate SAP Fiori foundation roles.",
            C: "Replicate backend catalogs.",
            D: "Enable SAP GUI for HTML.",
            E: "Create users with generated business roles."
        },
        correctAnswer: ["B", "C", "D"],
        type: "multiple"
    },
    {
        question: "You plan to update an AS ABAP-based SAP system with the role 'Quality Assurance System'. Which of the following actions might be required before you start Software Update Manager (SUM) for this system?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Import the modification adjustment transports from the update of the 'Development System'.",
            B: "Follow the instructions in the SAP Notes for the used version of SUM.",
            C: "Update the database software.",
            D: "Execute the SAP Load Generator (SGEN) transaction for invalid loads."
        },
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
     {
        question: "You are preparing an installation of an AS ABAP-based SAP system. You already downloaded all software that Maintenance Planner can calculate. What else must you download?",
        note: "",
        options: {
            A: "SAP kernel",
            B: "SAPCAR",
            C: "SPAM/SAINT update",
            D: "SAP Host Agent"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "When installing an SAP S/4HANA Server 1909 system, which actions can the Software Provisioning Manager (SWPM) perform only when the installation is started with the option SAPINST_STACK_XML?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Apply a SPAM/SAINT update",
            B: "Set the password of user DDIC in client 000",
            C: "Set up Transport Management System (TMS)",
            D: "Import additional languages",
            E: "Install an SAP Host Agent"
        },
        correctAnswer: ["A", "C", "D"],
        type: "multiple"
    },
    {
        question: "You have passed the initial authentication for an SAP Fiori transactional app. Which authentication technology is used for subsequent OData calls of this app?",
        note: "",
        options: {
            A: "SAML 2.0",
            B: "X.509 client certificates",
            C: "SAP logon tickets",
            D: "ABAP Session Security"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "When releasing a workbench request from the development system, what are prerequisites for an export to take place?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Repository objects within the workbench request must be assigned to a package.",
            B: "A delivery route from the development system to a subsequent system must exist.",
            C: "Repository objects within the workbench request must be assigned to the same transport layer.",
            D: "Packages used by objects in the workbench request must be assigned to a valid transport layer.",
            E: "A consolidation route from the development system to a subsequent system must exist."
        },
        correctAnswer: ["A", "D", "E"],
        type: "multiple"
    },
    {
        question: "What is the correct sequence of the following four steps when you restart the SAP HANA database system?",
        note: "",
        options: {
            A: "Row tables are loaded into memory. Column tables are loaded. Open transactions are recovered. Aborted transactions are rolled back.",
            B: "Aborted transactions are rolled back. Open transactions are recovered. Row tables are loaded into memory. Column tables are loaded.",
            C: "Row tables are loaded into memory. Open transactions are recovered. Aborted transactions are rolled back. Column tables are loaded.",
            D: "Aborted transactions are rolled back. Row tables are loaded into memory. Open transactions are recovered. Column tables are loaded."
        },
        correctAnswer: ["C"],
        type: "single"
    },
     {
        question: "Which app types need SAP HANA as system database?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Analytical apps",
            B: "Fact sheet apps",
            C: "Transactional apps",
            D: "Classic applications"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "In an SAP S/4HANA Server system, a target system alias, FIORI, is maintained for source system alias S4FIN. Which connection is relevant for the extraction of back-end catalogs with alias S4FIN?",
        note: "",
        options: {
            A: "S4FIN_RFC",
            B: "FIORI_RFC",
            C: "S4FIN_HTTPS",
            D: "FIORI_HTTPS"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "Which file systems are supported for the data and log volumes of the SAP HANA 2.0 database system?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "OCFS2",
            B: "Btrfs",
            C: "XFS",
            D: "GPFS"
        },
        correctAnswer: ["C", "D"],
        type: "multiple"
    },
    {
        question: "From top to bottom, what is the hierarchy of the NetWeaver Administrator (NWA)?",
        note: "",
        options: {
            A: "Work Set → Work Center → Function",
            B: "Work Center → Function → Work Set",
            C: "Work Center → Work Set → Function",
            D: "Function → Work Center → Work Set"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "Which of the following background jobs has the highest priority?",
        note: "",
        options: {
            A: "Class A job without a target server",
            B: "Class C job with a target server",
            C: "Class C job without a target server",
            D: "Class A job with a target server"
        },
        correctAnswer: ["D"],
        type: "single"
    },
     {
        question: "Under which Java System Properties category do you find an AS Java-based Manager in the SAP NetWeaver Administrator (NWA)?",
        note: "",
        options: {
            A: "Kernel",
            B: "VM Environment",
            C: "Applications",
            D: "Services"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "Which actions can be performed with the Software Update Manager (SUM) for an AS ABAP-based SAP system?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Applying an SAP kernel patch",
            B: "Applying a SPAM/SAINT update",
            C: "Correcting software information via a CISI run",
            D: "Installing an SAP Host Agent",
            E: "Setting up the Transport Management System (TMS)"
        },
        correctAnswer: ["A", "B", "C"],
        type: "multiple"
    },
    {
        question: "What are prerequisites for enabling communication between a standalone SAP Web Dispatcher and an AS ABAP-based SAP system?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Identification of the HTTP port of the ABAP message server",
            B: "Activation of ICF service /sap/public/icf_info/icr_groups",
            C: "Identification of the HTTP port of the PAS instanceIs ICM process",
            D: "Activation of ICF service /sap/public/ping"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "What are prerequisites to use the Software Update Manager to apply SAP Support Packages to an AS ABAP-based SAP system?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "A Stack XML file must exist.",
            B: "The SUM archive must have been provided to the SAP Host Agent",
            C: "The SAP Host Agent must have been configured by SUM.",
            D: "The SUM archive must have been extracted.",
            E: "The latest SAP kernel patch has been applied to the SAP system."
        },
        correctAnswer: ["A", "C", "D"],
        type: "multiple"
    },
    {
        question: "What can you configure by maintaining table HTTPURLLOC?",
        note: "",
        options: {
            A: "The hostname of the URL launched by transaction /UI2/FLP",
            B: "The URL of a local Web server for user assistance resources",
            C: "The URL used by classic applications",
            D: "The path of the URL launched by transaction /UI2/FLP"
        },
        correctAnswer: ["A"],
        type: "single"
    },
     {
        question: "In an AS ABAP-based SAP system, you need to create a user that is not enabled for dialog interaction and is subject to the validity period of passwords. Which user type do you choose?",
        note: "",
        options: {
            A: "Communications Data",
            B: "Service",
            C: "Reference",
            D: "System"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "Using standard transport protocol settings, after importing a transport request, which log file provides the return codes of the individual import steps?",
        note: "(Note: These answers use the following abbreviations: year <YY>, week: <WW>, quarter <Q>, SAP system ID <SID>, and a 5-digit number <nnnnn>.)",
        options: {
            A: "ALOG<YY><WW>.<SID>",
            B: "ULOG<YY>_<Q>",
            C: "SLOG<YY><WW>.<SID>",
            D: "<SID>E9<nnnnn>.<SID>"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "You are importing an SAP Support Package Stack with transaction SPAM. Which steps require SAP system downtime?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Modification adjustment of other objects (SPAU)",
            B: "Import of inactive dictionary objects (DD IMPORT)",
            C: "Activation of dictionary objects (DD ACTIVATION)",
            D: "Modification adjustment of dictionary objects (SPDD)"
        },
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "You are logged onto an AS ABAP-based SAP system. What happens when you release a task of a transport request that contains changes to a program?",
        note: "",
        options: {
            A: "A data file and a cofile are created.",
            B: "The object list is handed over to the transport request.",
            C: "The repository locks are released.",
            D: "A version is created in version management."
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "What is the definition of “Transport Group” in Transport Management System (TMS)?",
        note: "",
        options: {
            A: "A collection of systems that are assigned to the same transport target group",
            B: "A collection of systems that share the same transport directory",
            C: "A collection of systems that are connected by transport routes",
            D: "A collection of systems that are controlled by the same transport domain controller"
        },
        correctAnswer: ["B"],
        type: "single"
    },
     {
        question: "In an embedded deployment, which protocol is used by object pages to access the SAP S/4HANA system?",
        note: "",
        options: {
            A: "OData",
            B: "RFC",
            C: "DIAG",
            D: "InA"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "Which services can you stop in the SAP HANA cockpit from the SYSTEMDB Manage Services app?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Daemon",
            B: "Preprocessor",
            C: "Index server",
            D: "Compile server"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "During startup, an AS Java-based SAP system generates an error. Which file contains information about manager and services?",
        note: "",
        options: {
            A: "dev_jstart",
            B: "dev_icm",
            C: "std_server<X>.out",
            D: "jvm_bootstrap.out"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "What are some start conditions of a background job in an AS ABAP- based SAP system?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Defining an external command",
            B: "Switching the operation mode",
            C: "Reaching a specific date and time",
            D: "Triggering a background event",
            E: "Creating a job server group"
        },
        correctAnswer: ["B", "C", "D"],
        type: "multiple"
    },
    {
        question: "Using standard tp settings, how does the transport strategy IQueue-Driven Transports, Mass transportsI differ from IQueue- Driven Transports, Single transportsI?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Using the IImport RequestI button causes the imported transport requests to remain in the import queue.",
            B: "The IImport All RequestsI button is available.",
            C: "Return Code 16 is caused by an erroneous object in a transport request.",
            D: "Return Code 8 is considered a successful import.",
            E: "The import process can be scheduled in the background."
        },
        correctAnswer: ["A", "B", "D"],
        type: "multiple"
    },
     {
        question: "When performing a standard SAP HANA database system installation, which users will be created or validated during that installation?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "SYSTEM",
            B: "SAP<SID>",
            C: "<sid>crypt",
            D: "sapadm"
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "You want to add an SAP Fiori group to a user’s SAP Fiori launchpad. To what do you have to assign the SAP Fiori group?",
        note: "",
        options: {
            A: "To a user group assigned to the user",
            B: "To a parameter ID of the user",
            C: "To a role assigned to the user",
            D: "To an authorization profile assigned to the user"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "When performing a local client copy, which client copy profiles are available?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "All Client-Specific Data w/o Change Documents",
            B: "Customizing including Cross-Client Customizing",
            C: "Application Data and User Master Data",
            D: "Customizing, User Master Record and User Variants.",
            E: "User Master Records and Authorization Profiles"
        },
        correctAnswer: ["A", "D", "E"],
        type: "multiple"
    },
    {
        question: "Which processes can run optionally as part of ABAP SAP Central Services (ASCS)?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "RFC Gateway",
            B: "Message Server",
            C: "Enqueue Server",
            D: "SAP Web Dispatcher"
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "In the role maintenance transaction (PFCG) of an AS ABAP-based SAP system, which step grants the authorizations of a role to a user master record?",
        note: "",
        options: {
            A: "Assign a user to the role",
            B: "Save the role",
            C: "Generate the profile",
            D: "Perform a user comparison"
        },
        correctAnswer: ["D"],
        type: "single"
    },
     {
        question: "What is the purpose of the SAP HANA secure user store (hdbuserstore)?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "To store connection information on the SAP HANA XS advanced engine",
            B: "To configure an SAP HANA auto-restart for fault recovery",
            C: "To store connection information on the SAP HANA database client",
            D: "To configure failover support in a 3-tier scenario"
        },
        correctAnswer: ["C", "D"],
        type: "multiple"
    },
    {
        question: "You configure the Transport Management System (TMS) as part of the installation of an AS ABAP-based SAP system. What information can you supply for the first SAP system that uses a specific transport directory?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "The description of the AS ABAP-based SAP system",
            B: "The name of the Transport Domain",
            C: "The password of a new user that will be created",
            D: "The name of the Transport Group",
            E: "The user ID of a new user that will be created"
        },
        correctAnswer: ["A", "B", "C"],
        type: "multiple"
    },
    {
        question: "You are running an SAP HANA database in log mode 'normal'. Under what circumstances does the database automatically execute a regular log backup?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "When the time threshold is exceeded",
            B: "When the log segment is full",
            C: "When a commit occurs",
            D: "When the log buffer is full"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "What is the correct parameter replacement sequence in an AS java- based SAP system?",
        note: "Note: the sequences below are sorted by priority from highest to lowest",
        options: {
            A: "Instance custom, Template default, Template custom",
            B: "Template custom, Instance custom, Template default",
            C: "Template default, Template custom, Instance custom",
            D: "Instance custom, Template custom, Template default"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "When you install SAP Solution Manager 7.2 AS Java, what information do you need to provide?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "The decision whether to install an SAP Gateway integrated in the SCS instance",
            B: "The package path to an archive for SAP JVM",
            C: "The package path to additional language installation media",
            D: "The decision to use an External ABAP System as UME Data Source"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
     {
        question: "You want to configure the transport domain for the transport of AS Java-based SAP systems (for example SAP Enterprise Portal). Which entry type do you create for these systems in the System Overview area of the Transport Management System (transaction STMS)?",
        note: "",
        options: {
            A: "Virtual System",
            B: "External System",
            C: "Java Stack Configuration",
            D: "Non-ABAP System"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "Your SAP S/4HANA Server system consists of an ABAP Central Services instance, a Primary Application Server instance, and two Additional Application Server instances. How many system profile files are evaluated for this SAP system during system start?",
        note: "",
        options: {
            A: "9",
            B: "5",
            C: "8",
            D: "4"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "In which subdirectories of sapmnt can you find information about startup problems of an AS Java-based SAP system?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "D<instance no.>/work",
            B: "J<instance no.>/work",
            C: "J<instance no.>/log",
            D: "SCS<instance no.>/work"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "How does SAP HANA encrypt the data persistence layer?",
        note: "",
        options: {
            A: "By row level",
            B: "By page level",
            C: "By column level",
            D: "By table level"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "You want to perform rapid activation for SAP Fiori. In what order should you run the task lists?",
        note: "",
        options: {
            A: "1. SAP_GW_FIORI_ERP_ONE_CLNT_SETUP 2. SAP_FIORI_FOUNDATION_S4 3. SAP_FIORI_CONTENT_ACTIVATION",
            B: "1. SAP_FIORI_FOUNDATION_S4 2. SAP_GW_FIORI_ERP_ONE_CLNT_SETUP 3. SAP_FIORI_CONTENT_ACTIVATION",
            C: "1. SAP_GW_FIORI_ERP_ONE_CLNT_SETUP 2. SAP_FIORI_CONTENT_ACTIVATION 3. SAP_FIORI_FOUNDATION_S4",
            D: "1. SAP_FIORI_FOUNDATION_S4 2. SAP_FIORI_CONTENT_ACTIVATION 3. SAP_GW_FIORI_ERP_ONE_CLNT_SETUP"
        },
        correctAnswer: ["A"],
        type: "single"
    },
     {
        question: "In an AS ABAP-based SAP system, where is the lock table stored?",
        note: "",
        options: {
            A: "Main memory of the Primary Application Server instance",
            B: "File system of the Primary Application Server instance",
            C: "Main memory of the Central Services instance",
            D: "Database"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "In ABAP programs, what are features of ABAP SQL that are not available with native SQL?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Database independence",
            B: "Execution without a work process",
            C: "Execution of ABAP programs as database procedures",
            D: "Use of the AS ABAP data buffer"
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "How can the system database administrator disable tenant database functionalities?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Using the hdbuserstore tool",
            B: "Using the Manage Restricted Features app",
            C: "Using the Manage Database Configuration app",
            D: "Using the resident hdblcm tool"
        },
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "When using the java Startup and Control Framework to shut down an AS Java-based SAP system, which of the following stop the server process(es)?",
        note: "",
        options: {
            A: "Instance Controller",
            B: "Database",
            C: "ICM",
            D: "sapstartsrv"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "Which file system locations do you need to specify when installing the SAP HANA multi-host database system using the default settings?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "/usr/sap/hostctrl",
            B: "/hana/shared",
            C: "/hana/log/<SID>",
            D: "/usr/sap/<SID>"
        },
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
     {
        question: "You want to configure the TMS QA Approval procedure for an AS ABAP-based system landscape. Which approval steps can you choose?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "To be approved by request owner",
            B: "To be approved by developer",
            C: "To be approved by system administration",
            D: "To be approved by project manager",
            E: "To be approved by department"
        },
        correctAnswer: ["A", "C", "E"],
        type: "multiple"
    },
    {
        question: "For an SAP HANA tailored datacenter integration (TDI) approach, what is the additional disk space factor required during delta merge operations?",
        note: "",
        options: {
            A: "2",
            B: "3",
            C: "1.6",
            D: "1.2"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "You are configuring outbound e-mails for an AS ABAP-based SAP system. What can you use to set the default domain?",
        note: "",
        options: {
            A: "Report RSADRCK7",
            B: "Profile parameter is/SMTP/virt_host_<x>",
            C: "Transaction SCOT",
            D: "File DOMAIN.CFG"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "In which situations can you resume the failed recovery of your productive SAP HANA tenant database?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "An aborted recovery of the configuration files",
            B: "An aborted recovery of a complete data backup",
            C: "An aborted recovery of a delta data backup",
            D: "An aborted recovery of a log backup"
        },
        correctAnswer: ["C", "D"],
        type: "multiple"
    },
    {
        question: "Which characteristics describe an SAP HANA multitenant database container (MDC) system?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "The name server provides index server functionality for the system database.",
            B: "Database isolation increases the isolation between tenant databases on operating system level.",
            C: "Each tenant database runs its own compile server and the preprocessor server.",
            D: "The name server owns information about the location of tables and table partitions in databases.",
            E: "A multitenant database container system is identified by a single system ID (SID)."
        },
        correctAnswer: ["A", "B", "E"],
        type: "multiple"
    },
     {
        question: "Which tasks can you perform when using the SAP HANA database lifecycle manager (HDBLCM) from the SAP HANA installation media?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Rename the SAP HANA database system.",
            B: "Extract the SAP HANA database system components.",
            C: "Uninstall the SAP HANA database system and its components.",
            D: "Update the SAP HANA database system and its components."
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "Which of the following protocols is SAPIs RFC protocol based on?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "OLE",
            B: "TCP/IP",
            C: "CPI-C",
            D: "OData"
        },
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "You are using a standard three system landscape, DEV, QAS, and PRD. When will a change of a repository object in the QAS system be treated as correction?",
        note: "",
        options: {
            A: "If the object was created in DEV and transported to QAS via a transport of copies.",
            B: "If the object’s name is in the SAP name range.",
            C: "If the object was created in DEV and transported to QAS via a workbench request.",
            D: "If the original system of the object is QAS."
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "You are installing an SAP S/4HANA Server 1909 system, using s4xhost as application server host and haxhost as database host. Which actions can Software Provisioning Manager (SWPM) perform?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Set database import parameters for the database running on haxhost",
            B: "Copy the database installation media from s4xhost to haxhost",
            C: "Install the Central Service instance on s4xhost",
            D: "Install the database on haxhost",
            E: "Copy the database backup media from s4xhost to haxhost"
        },
        correctAnswer: ["A", "C", "D"],
        type: "multiple"
    },
    {
        question: "Which parameters are mandatory when using the HDBLCM tool to install the SAP HANA database system in batch mode?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Installation path",
            B: "SAP HANA System ID (SID)",
            C: "Data and log path",
            D: "Password of user sapadm"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
     {
        question: "The SAP Fiori launchpad is working for your users. How can you enable access to the SAP Easy Access menu for them in the app finder?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "By providing an HTTP destination type H named FIORI_CLASSICUI_HTTPS (transaction SM59)",
            B: "By applying the correct settings in the SAP Fiori launchpad configuration (transaction /UI2/FLP_SYS_CONF or /UI2/FLP_CUS_CONF)",
            C: "By assigning the correct target mappings, shipped via catalog /UI2/CLASSICAL_GUI_MENU",
            D: "By assigning the authorization to start transaction SEARCH_SAP_MENU"
        },
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "You are updating an AS Java-based SAP system. Which actions can Software Update Manager execute?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Lock the development environment",
            B: "Update without using a stack configuration file (stack xml file)",
            C: "Update SAP Host Agent",
            D: "Check the archives authenticity"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "Which of the following tools are used when importing a transport request?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "RDDIMPDP",
            B: "R3load",
            C: "tp",
            D: "RDDNEWPP",
            E: "R3trans"
        },
        correctAnswer: ["A", "C", "E"],
        type: "multiple"
    },
    {
        question: "You want to set up a printer locally on a Microsoft Windows-based AS ABAP. Which host spool access method must you use?",
        note: "",
        options: {
            A: "L",
            B: "U",
            C: "G",
            D: "C"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "You have configured an SAP Web Dispatcher and set: wdisp/ssl_encrypt=2 & icm/server_port_<xx>=...PROT=HTTP. Which communication channels does this establish?",
        note: "",
        options: {
            A: "HTTP between the client and SAP Web Dispatcher. HTTPS between SAP Web Dispatcher and the SAP system",
            B: "HTTPS between the client and SAP Web Dispatcher. HTTP between SAP Web Dispatcher and the SAP system",
            C: "HTTP between the client and SAP Web Dispatcher. HTTP between SAP Web Dispatcher and the SAP system",
            D: "HTTPS between the client and SAP Web Dispatcher. HTTPS between SAP Web Dispatcher and the SAP system"
        },
        correctAnswer: ["A"],
        type: "single"
    },
     {
        question: "Which tools can be used to create SAP Fiori catalogs?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "SAP Fiori launchpad designer (/UI2/FLPD_CUST)",
            B: "SAP Fiori launchpad content aggregator (/UI2/FLPCA)",
            C: "SAP Fiori launchpad settings (/UI2/FLP_CUS_CONF)",
            D: "SAP Fiori launchpad content manager (/UI2/FLPCM_CUST)",
            E: "SAP Fiori launchpad application manager (/UI2/FLPAM)"
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "You are working in an AS ABAP-based SAP system that runs on Linux. Where is the spool data stored when you use the value ‘G’ for the profile parameter rspo/store_location?",
        note: "",
        options: {
            A: "/usr/sap/<SID>/D<nn>/work",
            B: "/usr/sap/<SID>/sys/global",
            C: "/usr/sap/<SID>/D<nn>/data",
            D: "/usr/sap/<SID>/sys/profile"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "During the installation of SAP Solution Manager AS ABAP 7.2, which of the following user IDs does SAPinst suggest for SAP Solution Manager AS Java 7.2?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "J2EE_ADMIN",
            B: "SAP*",
            C: "SAPJSF",
            D: "Administrator"
        },
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "For AS ABAP-based SAP systems, you can use Software Update Manager to update which of the following?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Database system",
            B: "Software component SAP_BASIS",
            C: "Implemented SAP Notes",
            D: "SAP kernel"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "During the import of a transport request, which tools write log files to the tmp subdirectory of the transport directory?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "RDDMNTAB",
            B: "R3load",
            C: "R3trans",
            D: "RDDMASGL",
            E: "Tp"
        },
        correctAnswer: ["A", "C", "D"],
        type: "multiple"
    },
     {
        question: "You are running an AS ABAP-based SAP system. Which parts does the Internet Server Cache (ISC) of the ICM process consist of?",
        note: "Note: There are 3 correct answers to this question.",
        options: {
            A: "Browser cache",
            B: "CPU cache",
            C: "Disk cache",
            D: "UFO cache",
            E: "Memory cache"
        },
        correctAnswer: ["C", "D", "E"],
        type: "multiple"
    },
    {
        question: "How can you register multiple SAP Gateway services simultaneously?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Using task list SAP_GATEWAY_ACTIVATE_ODATA_SERV.",
            B: "Using task list SAP_GATEWAY_BASIC_CONFIG.",
            C: "Using transaction /IWFND/GW_CLIENT.",
            D: "Using transaction /IWFND/MAINT_SERVICE."
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "You are installing a Primary Application Server and a Central Services instance for an AS Java-based SAP system. What is the minimum number of Java server nodes you must configure?",
        note: "",
        options: {
            A: "4",
            B: "2",
            C: "0",
            D: "1"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "Which work process types can create spool requests?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Dialog",
            B: "Update",
            C: "Spool",
            D: "Background"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "Which instances have processes that establish a connection to the database of an SAP system?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Enqueue Replication Server",
            B: "Primary Application Server",
            C: "Additional Application Server",
            D: "Central Services"
        },
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
     {
        question: "Which changes in an AS Java-based SAP System require a restart other affected server process(es) before they will take effect?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "A change of a manager property value",
            B: "A change of the key phrase",
            C: "A change of the UME data source (S)",
            D: "A change of Service property value"
        },
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "What are the start conditions of a background job in an AS ABAP-based SAP system?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Starting of a dynamic work process",
            B: "Locking user DDIC in client 000",
            C: "Ending of a predecessor job",
            D: "Reaching a specific date and time"
        },
        correctAnswer: ["C", "D"],
        type: "multiple"
    },
    {
        question: "You have created a task list (STC01) in your development system. What can you use to make the task list available in the quality assurance system?",
        note: "",
        options: {
            A: "A workbench request",
            B: "A customizing request",
            C: "File download and upload",
            D: "An RFC-based distribution"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "In an AS ABAP-based SAP system, what can you use to change the value of a dynamically switchable parameter at runtime?",
        note: "",
        options: {
            A: "Report RSPFPAR",
            B: "Transaction Edit profile parameters (RZ11)",
            C: "Transaction Edit profiles (RZ10)",
            D: "Command line tool sappfpar (RZ11)"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "You have restarted the primary application server instance. After the restart, change will take effect for which profiles?",
        note: "Note: - These are 2 correct answers to this question.",
        options: {
            A: "Central services instance profile",
            B: "Default profile",
            C: "Additional Application server instance profile",
            D: "Primary Application Server instance profile"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
     {
        question: "In an AS ABAP-based, you are printing a list to a remote printer (host spool access method S or U) using sap GUI. What route does the printing data take?",
        note: "",
        options: {
            A: "Dialog Workprocess -> TemSe -> Spool Workprocess -> Priter",
            B: "Spool Workprocess -> TemSe -> Printer",
            C: "Dialog Workprocess -> Spool Workprocess ->TemSe -> Printer",
            D: "Spool Workprocess -> TemSe -> Dispatcher -> Printer"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "Using the Java Startup and Control Framework, what is the correct sequence of steps to start an application server of an AS Java-based SAP system?",
        note: "Note: the sequences below are sorted by priority from highest to lowest",
        options: {
            A: "Start Offline Deployment, Start bootstrap process, Start ICM/Server process(es), Connect to SCS instance",
            B: "Connect to SCS instance, Start Offline Deployment, Start bootstrap process, Start ICM/Server process(es)",
            C: "Start ICM/Server process(es), Start Offline Deployment, Start bootstrap process, Connect to SCS instance",
            D: "Connect to SCS instance, Start bootstrap process, Start Offline Deployment, Start ICM/Server process(es)"
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "You are using the enhanced Change and Transport System (CTS+) for the transport of native SAP HANA Applications. Which tool can you use to create a transport request for these applications in the CTS system?",
        note: "",
        options: {
            A: "Transport Organizer Web UI (in transaction STMS)",
            B: "Transport Organizer (Extended View) (in transaction SE01)",
            C: "Transport Organizer (in transaction SE09)",
            D: "SAP HANA Cockpit"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "What is the purpose of a security policy in an AS ABAP-based SAP system?",
        note: "",
        options: {
            A: "To define security relevant system profile parameters",
            B: "To Assign selected security attributes and their values to roles",
            C: "To assign selected security attributes and their values to users",
            D: "To define possible authentication mechanisms"
        },
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "How does ‘Transport of Copies’ differ from a ‘Workbench Request’?",
        note: "Note: There are 2 correct answers to this Question.",
        options: {
            A: "After the import, repository objects in the target system are classified as copies.",
            B: "When creating the transport request, a target system without a consolidation route can be selected.",
            C: "No cofile is created, when releasing the transport request with the Transport Organizer (SE09).",
            D: "When importing, the transport request is not forwarded to subsequent delivery systems."
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
     {
        question: "What action(s) can you perform in the SAP HANA cockpit to back up the complete database system?",
        note: "",
        options: {
            A: "Back up the system database and all tenant databases individually.",
            B: "Back up the system database and all tenant databases in one step.",
            C: "Back up the system using a fallback snapshot for every database.",
            D: "Back up the system using a database snapshot and a data snapshot."
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "In an AS ABAP-based SAP system, a user performs the second dialog step in a dialog transaction. The dialog work process used in the first dialog step is occupied by a different user. What happens with this second user request?",
        note: "",
        options: {
            A: "The dialog work process that handled the first dialog step performs a rollout to handle the request.",
            B: "The request is processed asynchronously by an update work process.",
            C: "The request remains in the request queue until the dialog work process that handled the first dialog step is free again.",
            D: "The request is processed by a different free dialog work process."
        },
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "When restarting an Additional Application Server instance, which profiles are evaluated?",
        note: "Note: There are 2 correct answers to this Question.",
        options: {
            A: "Instance profiles of the Primary Application Server",
            B: "Instance profiles of the Additional Application Server",
            C: "Instance profile of the Central Services instance",
            D: "Default profile"
        },
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "You want to create an ABAP task list in a development system to transport it to the production system. What must you do?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Assign the task list to a workbench transport request.",
            B: "Activate the task list",
            C: "Assign the task list to a customizing transport request.",
            D: "Assign the task list to a package."
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "Which operating system process initiates the start procedure of an AS Java-based SAP system instance?",
        note: "",
        options: {
            A: "Sapcpe",
            B: "Sapstartsrv",
            C: "Saphostexec",
            D: "Jstast"
        },
        correctAnswer: ["B"],
        type: "single"
    },
     {
        question: "What is the purpose of a pre-production system in an AS ABAP-based four-system landscape?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "To isolate the next urgent correction or project cycle.",
            B: "To act as a failover system for the production system.",
            C: "To detect cross reference errors.",
            D: "To implement urgent corrections."
        },
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "What is the purpose of a security policy in an AS ABAP-based SAP system?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "To specify user-specific system logon behavior and password rules",
            B: "To create security-relevant system profile parameters",
            C: "To eliminate user authentication at system logon",
            D: "To restrict logon for selected users"
        },
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "In an SAP S/4HANA server system, which data can you NOT maintain for a technical user?",
        note: "",
        options: {
            A: "Address",
            B: "Group",
            C: "Parameters",
            D: "Roles"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "Which steps are mandatory to configure an AS ABAP-based SAP system for outbound mail?",
        note: "Note: There are 2 correct answers to this question.",
        options: {
            A: "Maintain the default domain (transaction SCOT)",
            B: "Maintain and activate an SMTP node (transaction SCOT)",
            C: "Maintain and activate the SAPconnect node in the ICF (Transaction SICF)",
            D: "Create a system user with authorization profile S_A.SCON (transaction SU01)"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "In an SAP HANA database, what is the role of the index server?",
        note: "",
        options: {
            A: "To manage user authentication",
            B: "To store and process data",
            C: "To handle backup operations",
            D: "To manage network communication"
        },
        correctAnswer: ["B"],
        type: "single"
    },
     {
        question: "Which of the following are benefits of using the SAP HANA database lifecycle manager (HDBLCM)?",
        note: "(2 correct answers)",
        options: {
            A: "Simplified system installation",
            B: "Automated backup scheduling",
            C: "Streamlined system maintenance",
            D: "Enhanced user management"
        },
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "What is the purpose of the SAP HANA cockpit?",
        note: "",
        options: {
            A: "To develop SAP Fiori applications",
            B: "To manage and monitor SAP HANA databases",
            C: "To configure AS ABAP systems",
            D: "To perform client copies"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "Which of the following actions can be performed using the SAP Fiori launchpad content manager?",
        note: "(2 correct answers)",
        options: {
            A: "Create new catalogs",
            B: "Assign roles to users",
            C: "Manage content of existing catalogs",
            D: "Configure system aliases"
        },
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "In an AS ABAP-based SAP system, which transaction is used to monitor the status of background jobs?",
        note: "",
        options: {
            A: "SM37",
            B: "SM50",
            C: "SM66",
            D: "SM21"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "Which of the following are components of the SAP NetWeaver AS Java?",
        note: "(3 correct answers)",
        options: {
            A: "Server process",
            B: "Enqueue server",
            C: "Dispatcher",
            D: "Internet Communication Manager (ICM)",
            E: "Software Deployment Manager (SDM)"
        },
        correctAnswer: ["A", "C", "E"],
        type: "multiple"
    },
     {
        question: "What is the purpose of the SAP Host Agent?",
        note: "",
        options: {
            A: "To manage SAP Fiori applications",
            B: "To provide system monitoring and administration services",
            C: "To handle database backups",
            D: "To configure transport routes"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "Which of the following are prerequisites for performing a system copy of an SAP HANA database?",
        note: "(2 correct answers)",
        options: {
            A: "A consistent backup of the source system",
            B: "A valid SAP license key for the target system",
            C: "An active SAP Fiori launchpad",
            D: "A configured Transport Management System"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "In an AS ABAP-based SAP system, which transaction is used to manage transport requests?",
        note: "",
        options: {
            A: "SE09",
            B: "SM59",
            C: "SCC4",
            D: "SU01"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "Which of the following are features of the SAP HANA multitenant database container (MDC) architecture?",
        note: "(2 correct answers)",
        options: {
            A: "Multiple databases share the same system resources",
            B: "Each tenant has its own schema",
            C: "Tenants can be independently backed up",
            D: "Tenants share a common user management system"
        },
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "What is the purpose of the SAP Fiori launchpad designer?",
        note: "",
        options: {
            A: "To create SAP HANA database schemas",
            B: "To configure and customize the SAP Fiori launchpad",
            C: "To monitor system performance",
            D: "To manage transport requests"
        },
        correctAnswer: ["B"],
        type: "single"
    },
     {
        question: "Which of the following are tasks performed by the Software Update Manager (SUM) during an SAP system update?",
        note: "(3 correct answers)",
        options: {
            A: "Database migration",
            B: "Modification adjustment",
            C: "System downtime management",
            D: "User role assignment",
            E: "Transport request creation"
        },
        correctAnswer: ["A", "B", "C"],
        type: "multiple"
    },
    {
        question: "in an SAP HANA system, what is the purpose of the name server?",
        note: "",
        options: {
            A: "To manage data persistence",
            B: "To store topology and service information",
            C: "To execute SQL queries",
            D: "To handle user authentication"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "Which of the following are advantages of using SAP HANA as a database for SAP S/4HANA?",
        note: "(2 correct answers)",
        options: {
            A: "In-memory processing for faster performance",
            B: "Simplified data models",
            C: "Support for legacy ABAP programs",
            D: "Automatic transport management"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "In an AS ABAP-based SAP system, which transaction is used to configure the system landscape directory (SLD)?",
        note: "",
        options: {
            A: "RZ70",
            B: "SM59",
            C: "SE38",
            D: "STMS"
        },
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "Which of the following are components of the SAP HANA database system?",
        note: "(3 correct answers)",
        options: {
            A: "Index server",
            B: "Name server",
            C: "Preprocessor server",
            D: "Message server",
            E: "Enqueue server"
        },
        correctAnswer: ["A", "B", "C"],
        type: "multiple"
    },
     {
        question: "What is the purpose of the SAP HANA studio?",
        note: "",
        options: {
            A: "To manage SAP Fiori applications",
            B: "To administer and develop SAP HANA databases",
            C: "To configure transport routes",
            D: "To monitor AS ABAP systems"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "Which of the following are tasks performed during a client copy in an AS ABAP-based SAP system?",
        note: "(2 correct answers)",
        options: {
            A: "Copying user master data",
            B: "Copying application data",
            C: "Updating the SAP kernel",
            D: "Configuring system aliases"
        },
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "In an SAP S/4HANA system, which protocol is used for communication between the SAP Fiori front-end server and the back-end server?",
        note: "",
        options: {
            A: "RFC",
            B: "OData",
            C: "DIAG",
            D: "SOAP"
        },
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "Which of the following are benefits of using the Transport Management System (TMS) in an SAP system landscape?",
        note: "(3 correct answers)",
        options: {
            A: "Automated transport tracking",
            B: "Centralized transport control",
            C: "Support for multiple system types",
            D: "Automatic database backups",
            E: "User role management"
        },
        correctAnswer: ["A", "B", "C"],
        type: "multiple"
    }
];

// (Place the `quizQuestions` array here from the previous block)

let currentQuestionIndex = 0;
let score = 0;
const quizDiv = document.getElementById('quiz');
const resultsDiv = document.getElementById('quiz-results');
const scoreSpan = document.getElementById('current-score');
const totalQuestionsSpan = document.getElementById('total-questions');
const prevButton = document.getElementById('prev-button');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const questionListDiv = document.getElementById('question-list'); // Get the question list container

// Store user's answers and whether they answered correctly
const userAnswers = new Array(quizQuestions.length).fill(null);
const answeredCorrectly = new Array(quizQuestions.length).fill(false);


// Function to generate the list of question numbers in the side panel
function generateQuestionList() {
    questionListDiv.innerHTML = ''; // Clear the existing list
    quizQuestions.forEach((question, index) => {
        const questionNumberElement = document.createElement('div');
        questionNumberElement.classList.add('question-number');
        if (index === currentQuestionIndex) {
            questionNumberElement.classList.add('active'); // Mark the current question as active
        }
         // Add a class if the question has been answered
        if (userAnswers[index] !== null) {
             questionNumberElement.classList.add('answered');
        }
        questionNumberElement.textContent = index + 1;
        questionNumberElement.addEventListener('click', () => {
            jumpToQuestion(index);
        });
        questionListDiv.appendChild(questionNumberElement);
    });
}

// Function to jump to a specific question
function jumpToQuestion(index) {
    if (index >= 0 && index < quizQuestions.length) {
        currentQuestionIndex = index;
        loadQuestion(currentQuestionIndex);
        updateQuestionListActiveState(); // Update active state in the side panel
    }
}

// Function to update the active state in the question list side panel
function updateQuestionListActiveState() {
    const questionNumberElements = questionListDiv.querySelectorAll('.question-number');
    questionNumberElements.forEach((element, index) => {
        element.classList.remove('active');
         if (userAnswers[index] !== null) {
             element.classList.add('answered'); // Add 'answered' class
        } else {
             element.classList.remove('answered'); // Remove 'answered' class if not answered
        }
        if (index === currentQuestionIndex) {
            element.classList.add('active');
        }
    });
}


function loadQuestion(index) {
    const questionData = quizQuestions[index];
    const questionNumber = index + 1;

    let optionsHtml = '';
    const inputType = questionData.type === 'single' ? 'radio' : 'checkbox';

    const inputName = `q${questionNumber}`;

    for (const optionKey in questionData.options) {
        optionsHtml += `
            <label>
                <input type="${inputType}" name="${inputName}" value="${optionKey}">
                ${questionData.options[optionKey]}
            </label><br>
        `;
    }

    const questionHtml = `
        <div class="question-container" id="question-${questionNumber}">
            <div class="question">
                <h2>Question ${questionNumber}</h2>
                <p>${questionData.question}</p>
                ${questionData.note ? `<p><em>${questionData.note}</em></p>` : ''}
            </div>
            <div class="options">
                ${optionsHtml}
            </div>
            <div class="feedback" id="feedback-${questionNumber}"></div>
        </div>
    `;

    quizDiv.innerHTML = questionHtml;
    updateButtonStates();
    updateScoreDisplay();
    updateQuestionListActiveState(); // Ensure side panel state is updated when question loads


    // Restore checked answers if available (for navigation back and forth)
    const savedAnswer = userAnswers[index];
    if (savedAnswer) {
        savedAnswer.forEach(answerValue => {
            const inputElement = document.querySelector(`input[name="${inputName}"][value="${answerValue}"]`);
            if (inputElement) {
                inputElement.checked = true;
            }
        });
         // If the answer was already checked, display feedback immediately
         displayFeedback(index, savedAnswer);
         checkButton.disabled = true; // Disable check button if already answered
    } else {
         // If no saved answer, ensure feedback is clear and check button is enabled
        document.getElementById(`feedback-${questionNumber}`).textContent = '';
        document.getElementById(`feedback-${questionNumber}`).className = 'feedback';
        checkButton.disabled = false;
    }
}


function checkAnswer() {
    const index = currentQuestionIndex;
    const questionData = quizQuestions[index];
    const questionNumber = index + 1;
    const feedbackElement = document.getElementById('feedback-' + questionNumber);
    const inputs = document.querySelectorAll(`input[name="q${questionNumber}"]`);
    const selectedOptions = [];

    inputs.forEach(input => {
        if (input.checked) {
            selectedOptions.push(input.value);
        }
    });

    // Save the user's answer
    userAnswers[index] = selectedOptions;

    const correctOptions = questionData.correctAnswer;
    let isCorrect = false;

    if (questionData.type === 'single') {
        isCorrect = selectedOptions.length === 1 && selectedOptions[0] === correctOptions[0];
    } else { // multiple choice
        isCorrect = selectedOptions.length === correctOptions.length &&
                    selectedOptions.every(value => correctOptions.includes(value));
    }

    // Update score only if the question hasn't been answered correctly before
    if (isCorrect && !answeredCorrectly[index]) {
        score++;
        answeredCorrectly[index] = true; // Mark this question as correctly answered
        updateScoreDisplay();
    } else if (!isCorrect && answeredCorrectly[index]) {
        answeredCorrectly[index] = false;
    }


    displayFeedback(index, selectedOptions);
    updateQuestionListActiveState(); // Update side panel state after checking (e.g., mark as answered)


    // Disable check answer button after checking
    checkButton.disabled = true;
}

function displayFeedback(index, selectedOptions) {
     const questionData = quizQuestions[index];
    const questionNumber = index + 1;
    const feedbackElement = document.getElementById('feedback-' + questionNumber);
     const correctOptions = questionData.correctAnswer;

     let isCorrect = false;

    if (questionData.type === 'single') {
        isCorrect = selectedOptions.length === 1 && selectedOptions[0] === correctOptions[0];
    } else { // multiple choice
        isCorrect = selectedOptions.length === correctOptions.length &&
                    selectedOptions.every(value => correctOptions.includes(value));
    }

    if (isCorrect) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.className = 'feedback correct';
    } else {
        feedbackElement.textContent = 'Incorrect. The correct answer(s) are: ' + correctOptions.join(', ');
        feedbackElement.className = 'feedback incorrect';
    }
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        displayResults();
    }
}

function prevQuestion() {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        loadQuestion(currentQuestionIndex);
    }
}

function updateButtonStates() {
    // Update state of Previous button
    if (currentQuestionIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Update state of Next button
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextButton.textContent = 'Finish Quiz';
    } else {
         nextButton.textContent = 'Next Question';
    }

    // Re-enable check button for the new question if it hasn't been answered yet
    if (userAnswers[currentQuestionIndex] === null) {
         checkButton.disabled = false;
    } else {
         checkButton.disabled = true;
    }
}

function updateScoreDisplay() {
    scoreSpan.textContent = score;
}

function displayResults() {
    quizDiv.innerHTML = ''; // Clear the question area
    resultsDiv.innerHTML = `<h2>Quiz Finished!</h2><p>Your final score is: ${score} out of ${quizQuestions.length}</p>`;
    // Hide elements after the quiz
    document.querySelector('.fixed-buttons').style.display = 'none';
    document.querySelector('.side-panel').style.display = 'none'; // Hide side panel
     document.getElementById('score-area').style.display = 'none'; // Hide score area
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    totalQuestionsSpan.textContent = quizQuestions.length;
    generateQuestionList(); // Generate the question list in the side panel
    loadQuestion(currentQuestionIndex); // Load the first question
});

const incorrectQuestions = []; // Array to store indices of incorrectly answered questions

function checkAnswer() {
    const index = currentQuestionIndex;
    const questionData = quizQuestions[index];
    const selectedOptions = []; // Store user's selected options
    const inputs = document.querySelectorAll(`input[name="q${index + 1}"]`);

    // Gather selected options
    inputs.forEach(input => {
        if (input.checked) {
            selectedOptions.push(input.value);
        }
    });

    const correctOptions = questionData.correctAnswer;
    const isCorrect = questionData.type === 'single'
        ? selectedOptions.length === 1 && selectedOptions[0] === correctOptions[0]
        : selectedOptions.length === correctOptions.length && selectedOptions.every(option => correctOptions.includes(option));

    // Track incorrect questions
    if (!isCorrect && !incorrectQuestions.includes(index)) {
        incorrectQuestions.push(index);
    }
}