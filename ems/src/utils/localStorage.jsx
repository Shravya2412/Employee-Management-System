
// const employees = [
//     {
//         id: 1,
//         email: "e@e.com",
//         password: "123",
//         firstName: "Amit",
//         taskCounts: {
//             active: 1,
//             newTask: 1,
//             completed: 1,
//             failed: 0
//         },
//         tasks: [
//             {
//                 taskTitle: "Complete Documentation",
//                 taskDescription: "Prepare project documentation for the upcoming meeting.",
//                 taskDate: "2024-12-23",
//                 category: "Documentation",
//                 active: true,
//                 completed: false,
//                 failed: false,
//                 newTask: true
//             },
//             {
//                 taskTitle: "Code Review",
//                 taskDescription: "Review the codebase for the latest feature implementation.",
//                 taskDate: "2024-12-24",
//                 category: "Code Review",
//                 active: false,
//                 completed: true,
//                 failed: false,
//                 newTask: false
//             }
//         ]
//     },
//     {
//         id: 2,
//         email: "employee2@example.com",
//         password: "123",
//         firstName: "Rohit",
//         taskCounts: {
//             active: 2,
//             newTask: 2,
//             completed: 0,
//             failed: 1
//         },
//         tasks: [
//             {
//                 taskTitle: "Client Meeting",
//                 taskDescription: "Discuss project requirements with the client.",
//                 taskDate: "2024-12-22",
//                 category: "Meetings",
//                 active: true,
//                 completed: false,
//                 failed: false,
//                 newTask: true
//             },
//             {
//                 taskTitle: "Bug Fixing",
//                 taskDescription: "Fix bugs in the authentication module.",
//                 taskDate: "2024-12-25",
//                 category: "Bug Fixing",
//                 active: false,
//                 completed: false,
//                 failed: true,
//                 newTask: false
//             },
//             {
//                 taskTitle: "UI Design Review",
//                 taskDescription: "Evaluate and finalize the UI design for the dashboard.",
//                 taskDate: "2024-12-27",
//                 category: "Design",
//                 active: true,
//                 completed: false,
//                 failed: false,
//                 newTask: true
//             }
//         ]
//     },
//     {
//         id: 3,
//         email: "employee3@example.com",
//         password: "123",
//         firstName: "Kiran",
//         taskCounts: {
//             active: 1,
//             newTask: 1,
//             completed: 1,
//             failed: 0
//         },
//         tasks: [
//             {
//                 taskTitle: "Database Backup",
//                 taskDescription: "Ensure a full backup of the database is taken.",
//                 taskDate: "2024-12-21",
//                 category: "Database",
//                 active: false,
//                 completed: true,
//                 failed: false,
//                 newTask: false
//             },
//             {
//                 taskTitle: "API Development",
//                 taskDescription: "Develop the payment gateway integration API.",
//                 taskDate: "2024-12-28",
//                 category: "Development",
//                 active: true,
//                 completed: false,
//                 failed: false,
//                 newTask: true
//             }
//         ]
//     },
//     {
//         id: 4,
//         email: "employee4@example.com",
//         password: "123",
//         firstName: "Priya",
//         taskCounts: {
//             active: 1,
//             newTask: 1,
//             completed: 1,
//             failed: 0
//         },
//         tasks: [
//             {
//                 taskTitle: "Team Meeting",
//                 taskDescription: "Organize a team meeting to discuss deadlines.",
//                 taskDate: "2024-12-26",
//                 category: "Management",
//                 active: true,
//                 completed: false,
//                 failed: false,
//                 newTask: true
//             },
//             {
//                 taskTitle: "Code Optimization",
//                 taskDescription: "Optimize the code for better performance.",
//                 taskDate: "2024-12-20",
//                 category: "Development",
//                 active: false,
//                 completed: true,
//                 failed: false,
//                 newTask: false
//             }
//         ]
//     },
//     {
//         id: 5,
//         email: "employee5@example.com",
//         password: "123",
//         firstName: "Anjali",
//         taskCounts: {
//             active: 2,
//             newTask: 1,
//             completed: 0,
//             failed: 0
//         },
//         tasks: [
//             {
//                 taskTitle: "Testing New Features",
//                 taskDescription: "Test the new features added to the application.",
//                 taskDate: "2024-12-29",
//                 category: "Testing",
//                 active: true,
//                 completed: false,
//                 failed: false,
//                 newTask: true
//             },
//             {
//                 taskTitle: "Prepare Training",
//                 taskDescription: "Prepare training material for new recruits.",
//                 taskDate: "2024-12-30",
//                 category: "Training",
//                 active: true,
//                 completed: false,
//                 failed: false,
//                 newTask: false
//             }
//         ]
//     }
// ];



const employees = [
    {
        id: 1,
        email: "e@e.com",
        password: "123",
        firstName: "Amit",
        taskCounts: {
            active: 1,
            newTask: 0,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                taskTitle: "Complete Documentation",
                taskDescription: "Prepare project documentation for the upcoming meeting.",
                taskDate: "2024-12-23",
                category: "Documentation",
                active: true,
                completed: false,
                failed: false,
                newTask: false
            },
            {
                taskTitle: "Code Review",
                taskDescription: "Review the codebase for the latest feature implementation.",
                taskDate: "2024-12-24",
                category: "Code Review",
                active: false,
                completed: true,
                failed: false,
                newTask: false
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        firstName: "Rohit",
        taskCounts: {
            active: 1,
            newTask: 2,
            completed: 0,
            failed: 0
        },
        tasks: [
            {
                taskTitle: "Client Meeting",
                taskDescription: "Discuss project requirements with the client.",
                taskDate: "2024-12-22",
                category: "Meetings",
                active: true,
                completed: false,
                failed: false,
                newTask: false
            },
            {
                taskTitle: "Bug Fixing",
                taskDescription: "Fix bugs in the authentication module.",
                taskDate: "2024-12-25",
                category: "Bug Fixing",
                active: false,
                completed: false,
                failed: false,
                newTask: true
            },
            {
                taskTitle: "UI Design Review",
                taskDescription: "Evaluate and finalize the UI design for the dashboard.",
                taskDate: "2024-12-27",
                category: "Design",
                active: false,
                completed: false,
                failed: false,
                newTask: true
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        firstName: "Kiran",
        taskCounts: {
            active: 1,
            newTask: 0,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                taskTitle: "Database Backup",
                taskDescription: "Ensure a full backup of the database is taken.",
                taskDate: "2024-12-21",
                category: "Database",
                active: false,
                completed: true,
                failed: false,
                newTask: false
            },
            {
                taskTitle: "API Development",
                taskDescription: "Develop the payment gateway integration API.",
                taskDate: "2024-12-28",
                category: "Development",
                active: true,
                completed: false,
                failed: false,
                newTask: false
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        firstName: "Priya",
        taskCounts: {
            active: 1,
            newTask: 0,
            completed: 0,
            failed: 1
        },
        tasks: [
            {
                taskTitle: "Team Meeting",
                taskDescription: "Organize a team meeting to discuss deadlines.",
                taskDate: "2024-12-26",
                category: "Management",
                active: true,
                completed: false,
                failed: false,
                newTask: false
            },
            {
                taskTitle: "Code Optimization",
                taskDescription: "Optimize the code for better performance.",
                taskDate: "2024-12-20",
                category: "Development",
                active: false,
                completed: false,
                failed: true,
                newTask: false
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        firstName: "Anjali",
        taskCounts: {
            active: 2,
            newTask: 0,
            completed: 0,
            failed: 0
        },
        tasks: [
            {
                taskTitle: "Testing New Features",
                taskDescription: "Test the new features added to the application.",
                taskDate: "2024-12-29",
                category: "Testing",
                active: true,
                completed: false,
                failed: false,
                newTask: false
            },
            {
                taskTitle: "Prepare Training",
                taskDescription: "Prepare training material for new recruits.",
                taskDate: "2024-12-30",
                category: "Training",
                active: true,
                completed: false,
                failed: false,
                newTask: false
            }
        ]
    }
];



const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123",
       
        
      
    }
];


  export const setLocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }


