import React, {type JSX, useState} from 'react'
import 'recharts'
import { ArrowDownRight, ArrowUpRight, Bell, Calendar, ChevronDown, ChevronRight, DollarSign, Home, LogOut, PlaneTakeoff, Search, Star, TreePalm } from 'lucide-react';
import { CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

// Stylesheet
import './userDashboard.css';
// Font
<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
                

// Types for the Dashboard

// Key Performance Indicators
export interface KPI {
  label: string;
  value: string;
  diff?: number;
  icon: JSX.Element;
}

// Monthly booking / spending trend
export interface TravelData {
  month: string;
  bookings: number;
  spend: number;
}

// Destination / trip type breakdown (pie chart)
export interface DestinationMix {
  name: string
  continent: "North America" | "South America" | "Africa" | "Asia" | "Europe" | "Oceania";
  value: number;
}

// Each booking the user has made
export interface Booking {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  amount: number;
  status: "UPCOMING" | "COMPLETED" | "CANCELLED";
}

// Notifications/messages for user
export interface UserNotification {
  id: string;
  message: string;
  createdAt: string;
  read: boolean;
}

// Props
export interface UserDashboardProps {
  kpis: KPI[];
  travelData: TravelData[];
  destinationMix: DestinationMix[];
  bookings: Booking[];
  notifications?: UserNotification[];
}

// Fake data for the User Dashboard
const kpis: KPI[] = [
    { label: "Upcoming Trips", value: "5", icon: <Calendar className="icon" /> },
    { label: "Total Expenditure", value: "$2,300", icon: <DollarSign className="icon" /> },
    { label: "Loyalty Points", value: "1,200 pts", icon: <Star className="icon" /> },
];

const travelData: TravelData[] = [
    { month: "Jan", bookings: 3, spend: 800 },
    { month: "Feb", bookings: 2, spend: 600 },
    { month: "Mar", bookings: 4, spend: 1000 },
    {month: "Apr", bookings: 6, spend: 500},
    {month: "May", bookings: 1, spend: 200},
    {month: "Jun", bookings: 5, spend: 1200},
    {month: "Jul", bookings: 7, spend: 1700},
    {month: "Aug", bookings: 6, spend: 1550},
    {month: "Sep", bookings: 4, spend: 900},
    {month: "Oct", bookings: 3, spend: 750},
    {month: "Nov", bookings: 15, spend: 2000},
    {month: "Dec", bookings: 30, spend: 4000}
];

const destinationMix: DestinationMix[] = [
    {name: "Bali", continent: "Asia", value: 300.0},
    {name: "Paris", continent: "Europe", value: 599.99},
    {name: "New York", continent: "North America", value: 799.99},
    {name: "Sydney", continent: "Oceania", value: 400.0},
    {name: "Cairo", continent: "Africa", value: 200.5},
    {name: "Tokyo", continent: "Asia", value: 600.0},
    {name: "Rio de Janeiro", continent: "South America", value: 350.0},
    {name: "Cape Town", continent: "Africa", value: 250.5},
    {name: "Dubai", continent: "Asia", value: 800.3},
    {name: "Moscow", continent: "Europe", value: 900.00},
    {name: "Houston", continent: "North America", value: 500.00}
];

const bookings: Booking[] = [
    { id: "1", destination: "Bali", startDate: "2023-10-01", endDate: "2023-10-10", amount: 800, status: "UPCOMING" },
    { id: "2", destination: "Paris", startDate: "2023-11-05", endDate: "2023-11-12", amount: 1200, status: "UPCOMING" },
    { id: "3", destination: "New York", startDate: "2023-12-15", endDate: "2023-12-20", amount: 1500, status: "COMPLETED" },
    { id: "4", destination: "Sydney", startDate: "2024-01-10", endDate: "2024-01-20", amount: 1000, status: "CANCELLED" },
    { id: "5", destination: "Tokyo", startDate: "2024-02-01", endDate: "2024-02-10", amount: 900, status: "UPCOMING" },
    { id: "6", destination: "Rio de Janeiro", startDate: "2024-03-05", endDate: "2024-03-12", amount: 1100, status: "COMPLETED" },
    { id: "7", destination: "Cape Town", startDate: "2024-04-01", endDate: "2024-04-10", amount: 950, status: "UPCOMING" },
    { id: "8", destination: "Dubai", startDate: "2024-05-01", endDate: "2024-05-10", amount: 1200, status: "UPCOMING" },
    { id: "9", destination: "Moscow", startDate: "2024-06-01", endDate: "2024-06-10", amount: 1300, status: "UPCOMING" },
    { id: "10", destination: "Houston", startDate: "2024-07-22", endDate: "2024-09-22", amount: 3000, status: "COMPLETED"}
];

// const notifications: UserNotification[] = [
//   { id: "1", message: "Your booking to Bali is confirmed!", createdAt: "2023-09-15", read: false },
//   { id: "2", message: "New deals available for Paris in November!", createdAt: "2023-09-20", read: true },
//   { id: "3", message: "Your loyalty points have been updated.", createdAt: "2023-09-25", read: false },
//   { id: "4", message: "Don't miss out on our exclusive offers!", createdAt: "2023-09-30", read: false },
//   { id: "5", message: "Your booking to New York has been completed.", createdAt: "2023-10-05", read: true },
//   { id: "6", message: "Check out our new destinations for 2024!", createdAt: "2023-10-10", read: false },
//   { id: "7", message: "Your booking to Sydney has been cancelled.", createdAt: "2023-10-15", read: true },
//   { id: "8", message: "You have new loyalty points available.", createdAt: "2023-10-20", read: false },
// ];

const statusBadge = (status: string) => {
  if (status === "UPCOMING") {
    return <span className="badge badge-upcoming">Upcoming</span>;
  }
  if (status === "COMPLETED") {
    return <span className="badge badge-completed">Completed</span>;
  }

  return <span className="badge badge-cancelled">Cancelled</span>;
}

const sidebarItems = [
    { label: "Overview", icon: <Home className="icon" />, path: "/overview" },
    { label: "Bookings", icon: <DollarSign className="icon" />, path: "/bookings" },
    { label: "Destinations", icon: <TreePalm className="icon" />, path: "/destinations" },
    { label: "Loyalty", icon: <Star className="icon" />, path: "/loyalty" },
]

const sidebarItemsClosed = [
    {icon: <Home className='icon'/>, path: "/overview", label: "Overview"},
    {icon: <DollarSign className='icon'/>, path: "/bookings", label: "Bookings"},
    {icon: <TreePalm className='icon'/>, path: "/destinations", label: "Destinations"},
    {icon: <Star className='icon'/>, path: "/loyalty", label: "Loyalty"}
]

const UserDashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
        <>
            <div className={`user-dashboard${sidebarOpen ? '' : ' sidebar-collapsed'}`}>
                {/* Sidebar */}
                <aside className={`sidebar${sidebarOpen ? '' : ' collapsed'}`}>
                    <div className="sidebar-header">
                        <button
                            className="sidebar-toggle"
                            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                            onClick={() => setSidebarOpen((open) => !open)}
                        >
                            <ChevronRight className={`icon${sidebarOpen ? '' : ' rotated'}`} />
                        </button>

                        {!sidebarOpen && (
                            <nav className="sidebar-nav closed">
                                {sidebarItemsClosed.map((item, idx) => (
                                    <a key={idx} href={item.path} className="sidebar-link" title={item.label}>
                                        {item.icon}
                                    </a>
                                ))}
                            </nav>
                        )}

                        {sidebarOpen && (
                            <>
                                <div className="logo">
                                    <PlaneTakeoff className="icon" />
                                </div>
                                <div className="subtitle">
                                    <p>User Dashboard</p>
                                    <h1 className="title">Travel Start</h1>
                                </div>
                                <nav className="sidebar-nav">
                                    {sidebarItems.map((item) => (
                                        <a key={item.label} href={item.path} className="sidebar-link">
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </a>
                                    ))}
                                </nav>
                                <div className="sidebar_footer">
                                    <PlaneTakeoff className="icon" />
                                    <span>Travel Start</span>
                                    <p>Bringing the world closer to you</p>
                                    <button className="btn primary">
                                        <Calendar className="icon" /> New Booking
                                    </button>
                                    <button className="btn secondary">
                                        <LogOut className="icon" /> Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </aside>

                {/* Main */}
                <main className="main">
                    {/* Topbar */}
                    <div className="topbar">
                        <div className="search-container">
                            <input type="text" placeholder="Search bookings, destinations..." className="search-input" />
                            <Search className="search-icon" />
                        </div>
                        <div className="topbar-actions">
                            <button className="notif-btn">
                                <Bell className="icon" />
                                <span className="dot"></span>
                            </button>
                            <div className="profile">
                                <img src="https://i.pravatar.cc/100?img=5" alt="Profile" className="profile-pic" />
                                <span className="username">John Doe</span>
                            </div>
                            <ChevronDown className="icon" />
                        </div>
                    </div>

                    {/* KPI Cards */}
                    <div className="kpi-grid">
                        {kpis.map((item) => (
                            <div key={item.label} className="kpi-card">
                                <div className="kpi-header">
                                    <div className="kpi-icon-wrapper">
                                        {item.icon}
                                        {/* <BadgeCheck className="icon faded" /> */}
                                    </div>
                                </div>
                                <p className="kpi-label">{item.label}</p>
                                <div className="kpi-value">
                                    <h3>{item.value}</h3>
                                    {typeof item.diff === 'number' && (
                                        <span className={item.diff >= 0 ? 'positive' : 'negative'}>
                                            {item.diff >= 0 ? <ArrowUpRight className="icon" /> : <ArrowDownRight className="icon" />} {Math.abs(item.diff)}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Travel Data Charts */}
                    <div className="travel-data-charts">
                        <div className="chart">
                            <h3>Bookings Over Time</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={travelData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis yAxisId="left" />
                                    <YAxis yAxisId="right" orientation="right" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart">
                            <h3>Spend Over Time</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={travelData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis yAxisId="left" />
                                    <YAxis yAxisId="right" orientation="right" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="spend" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart">
                            <h3>Destination Mix</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie data={destinationMix} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100}>
                                        {destinationMix.map((_, idx) => (
                                            <Cell key={idx}/>
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Bookings */}
                    <div className="bookings-card">
                        <h4>Recent Bookings</h4>
                        <table className="bookings-table">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Destination</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((b) => (
                                    <tr key={b.id}>
                                        <td>{b.id}</td>
                                        <td>{b.destination}</td>
                                        <td>{b.startDate}</td>
                                        <td>{b.endDate}</td>
                                        <td>{b.amount.toFixed(2)}</td>
                                        <td>{statusBadge(b.status)}</td>
                                        <td>
                                            <button className="btn small">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
};
export default UserDashboard;