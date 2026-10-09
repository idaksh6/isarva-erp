export const store = {
  "stats": {
    "totalRevenue": 248500,
    "revenueGrowth": 18.4,
    "activeOrders": 142,
    "ordersGrowth": 7.2,
    "inventoryCount": 1240,
    "lowStockAlerts": 6,
    "totalEmployees": 48,
    "employeeGrowth": 4.5,
    "monthlyRevenueChart": [
      {
        "month": "Jan",
        "revenue": 18500,
        "expenses": 12000,
        "profit": 6500
      },
      {
        "month": "Feb",
        "revenue": 22000,
        "expenses": 13500,
        "profit": 8500
      },
      {
        "month": "Mar",
        "revenue": 27000,
        "expenses": 15000,
        "profit": 12000
      },
      {
        "month": "Apr",
        "revenue": 24000,
        "expenses": 14200,
        "profit": 9800
      },
      {
        "month": "May",
        "revenue": 31000,
        "expenses": 17000,
        "profit": 14000
      },
      {
        "month": "Jun",
        "revenue": 38000,
        "expenses": 19500,
        "profit": 18500
      },
      {
        "month": "Jul",
        "revenue": 42000,
        "expenses": 21000,
        "profit": 21000
      },
      {
        "month": "Aug",
        "revenue": 46500,
        "expenses": 22800,
        "profit": 23700
      }
    ],
    "departmentDistribution": [
      {
        "name": "Engineering",
        "count": 18,
        "color": "#3b82f6"
      },
      {
        "name": "Sales & Mktg",
        "count": 12,
        "color": "#10b981"
      },
      {
        "name": "Operations",
        "count": 10,
        "color": "#f59e0b"
      },
      {
        "name": "HR",
        "count": 4,
        "color": "#8b5cf6"
      },
      {
        "name": "Finance",
        "count": 4,
        "color": "#ec4899"
      }
    ]
  },
  "inventory": [
    {
      "id": "INV-001",
      "name": "Enterprise Cloud Server Rack",
      "category": "Hardware",
      "sku": "SRV-ENT-90",
      "stock": 14,
      "minStock": 5,
      "price": 4200,
      "status": "In Stock"
    },
    {
      "id": "INV-002",
      "name": "Gigabit Switch 48-Port PoE",
      "category": "Networking",
      "sku": "NET-SW-48P",
      "stock": 4,
      "minStock": 8,
      "price": 850,
      "status": "Low Stock"
    },
    {
      "id": "INV-003",
      "name": "Ergonomic Executive Desk",
      "category": "Furniture",
      "sku": "FUR-DSK-01",
      "stock": 25,
      "minStock": 5,
      "price": 540,
      "status": "In Stock"
    },
    {
      "id": "INV-004",
      "name": "Biometric Access Terminal",
      "category": "Security",
      "sku": "SEC-BIO-10",
      "stock": 2,
      "minStock": 6,
      "price": 620,
      "status": "Low Stock"
    },
    {
      "id": "INV-005",
      "name": "Wireless Mesh Node X5",
      "category": "Networking",
      "sku": "NET-MSH-X5",
      "stock": 38,
      "minStock": 10,
      "price": 210,
      "status": "In Stock"
    },
    {
      "id": "INV-006",
      "name": "High-Torque Industrial Drill",
      "category": "Machinery",
      "sku": "MCH-DRL-40",
      "stock": 0,
      "minStock": 3,
      "price": 1150,
      "status": "Out of Stock"
    },
    {
      "id": "INV-007",
      "name": "Thermal Barcode Scanner Pro",
      "category": "Hardware",
      "sku": "BAR-TH-PRO",
      "stock": 19,
      "minStock": 5,
      "price": 180,
      "status": "In Stock"
    }
  ],
  "invoices": [
    {
      "id": "INV-2026-081",
      "client": "Apex Global Logistics",
      "amount": 14500,
      "date": "2026-10-01",
      "dueDate": "2026-10-15",
      "status": "Paid",
      "items": 3
    },
    {
      "id": "INV-2026-082",
      "client": "Nexis Health Technologies",
      "amount": 8250,
      "date": "2026-10-03",
      "dueDate": "2026-10-18",
      "status": "Pending",
      "items": 2
    },
    {
      "id": "INV-2026-083",
      "client": "Starlight Retailers Ltd",
      "amount": 23100,
      "date": "2026-10-04",
      "dueDate": "2026-10-19",
      "status": "Paid",
      "items": 5
    },
    {
      "id": "INV-2026-084",
      "client": "Zenith Manufacturing Corp",
      "amount": 6400,
      "date": "2026-09-20",
      "dueDate": "2026-10-05",
      "status": "Overdue",
      "items": 1
    },
    {
      "id": "INV-2026-085",
      "client": "Vanguard Cyber Systems",
      "amount": 11200,
      "date": "2026-10-07",
      "dueDate": "2026-10-22",
      "status": "Pending",
      "items": 4
    }
  ],
  "employees": [
    {
      "id": "EMP-101",
      "name": "Aarav Sharma",
      "role": "Lead Architect",
      "department": "Engineering",
      "email": "aarav.sharma@isarva.in",
      "phone": "+91 98765 43210",
      "status": "Active",
      "salary": 145000,
      "joinDate": "2023-03-15"
    },
    {
      "id": "EMP-102",
      "name": "Priya Iyer",
      "role": "Operations Director",
      "department": "Operations",
      "email": "priya.iyer@isarva.in",
      "phone": "+91 98765 43211",
      "status": "Active",
      "salary": 135000,
      "joinDate": "2022-07-01"
    },
    {
      "id": "EMP-103",
      "name": "Rohan Deshmukh",
      "role": "Senior ERP Consultant",
      "department": "Sales & Mktg",
      "email": "rohan.d@isarva.in",
      "phone": "+91 98765 43212",
      "status": "Active",
      "salary": 110000,
      "joinDate": "2024-01-10"
    },
    {
      "id": "EMP-104",
      "name": "Sneha Patel",
      "role": "HR Business Partner",
      "department": "HR",
      "email": "sneha.p@isarva.in",
      "phone": "+91 98765 43213",
      "status": "On Leave",
      "salary": 92000,
      "joinDate": "2023-11-20"
    },
    {
      "id": "EMP-105",
      "name": "Vikram Joshi",
      "role": "Financial Analyst",
      "department": "Finance",
      "email": "vikram.j@isarva.in",
      "phone": "+91 98765 43214",
      "status": "Active",
      "salary": 105000,
      "joinDate": "2024-05-02"
    }
  ],
  "customers": [
    {
      "id": "CUST-301",
      "name": "Apex Global Logistics",
      "contactPerson": "Rajesh Nair",
      "email": "billing@apexlogistics.com",
      "phone": "+91 88900 11223",
      "location": "Mumbai, India",
      "totalOrders": 14,
      "totalSpent": 78500,
      "status": "Active"
    },
    {
      "id": "CUST-302",
      "name": "Nexis Health Technologies",
      "contactPerson": "Dr. Anita Roy",
      "email": "procurement@nexishealth.io",
      "phone": "+91 88900 22334",
      "location": "Bengaluru, India",
      "totalOrders": 8,
      "totalSpent": 42100,
      "status": "Active"
    },
    {
      "id": "CUST-303",
      "name": "Starlight Retailers Ltd",
      "contactPerson": "Karan Mehra",
      "email": "karan@starlightretail.in",
      "phone": "+91 88900 33445",
      "location": "Delhi, India",
      "totalOrders": 21,
      "totalSpent": 114200,
      "status": "Active"
    },
    {
      "id": "CUST-304",
      "name": "Zenith Manufacturing Corp",
      "contactPerson": "Sanjay Dutt",
      "email": "supply@zenithmfg.com",
      "phone": "+91 88900 44556",
      "location": "Pune, India",
      "totalOrders": 5,
      "totalSpent": 26800,
      "status": "Lead"
    }
  ],
  "activityLog": [
    {
      "id": "ACT-1",
      "timestamp": "10 mins ago",
      "user": "Aarav Sharma",
      "action": "Created Invoice INV-2026-085 for Vanguard Cyber Systems (,200)",
      "type": "invoice"
    },
    {
      "id": "ACT-2",
      "timestamp": "45 mins ago",
      "user": "Priya Iyer",
      "action": "Updated stock count for Gigabit Switch 48-Port PoE (4 units remaining)",
      "type": "inventory"
    },
    {
      "id": "ACT-3",
      "timestamp": "2 hours ago",
      "user": "Sneha Patel",
      "action": "Approved annual leave request for Employee EMP-104",
      "type": "hr"
    },
    {
      "id": "ACT-4",
      "timestamp": "5 hours ago",
      "user": "System",
      "action": "Automated daily backup completed successfully to cloud vault",
      "type": "system"
    }
  ]
};
