import {
  AlertTriangle, Archive, BriefcaseBusiness, Building2, CalendarDays, ChevronRight,
  CircleDollarSign, ClipboardCheck, FileCheck2, FileText, LayoutDashboard, ListTodo,
  MessageSquareText, MoreHorizontal, Plus, Search, Settings, ShieldCheck, UsersRound
} from 'lucide-react';

const projects = [
  { name: 'Summer Works Programme', site: 'School A', area: 'Facilities', progress: 68, budget: 'AED 1.20m', status: 'On track', due: '28 Aug' },
  { name: 'Transport Mobilisation', site: 'School Group', area: 'Transport', progress: 54, budget: 'AED 420k', status: 'Attention', due: '24 Aug' },
  { name: 'Catering Supplier Transition', site: 'School B', area: 'Commercial Ops', progress: 81, budget: 'AED 95k', status: 'On track', due: '19 Aug' },
  { name: 'CCTV Expansion', site: 'School C', area: 'Security', progress: 35, budget: 'AED 170k', status: 'Delayed', due: '15 Aug' },
];

const attention = [
  ['Supplier response overdue', 'Playground resurfacing · ABC Contracting', '2 days'],
  ['Contract notice deadline', 'Transport Services Agreement', '12 days'],
  ['Compliance document expiring', 'Public liability insurance · Vendor 04', '18 days'],
  ['Budget approval required', 'CCTV Expansion · Variation 02', 'Today'],
];

const nav = [
  ['Overview', LayoutDashboard], ['My Work', ListTodo], ['Projects', BriefcaseBusiness],
  ['Calendar', CalendarDays], ['Suppliers', UsersRound], ['Contracts', FileText],
  ['Compliance', ShieldCheck], ['Budgets', CircleDollarSign], ['Documents', FileCheck2],
  ['Communications', MessageSquareText], ['Archive', Archive],
];

function Metric({ label, value, detail, icon: Icon }) {
  return <div className="metric"><div className="metric-top"><span>{label}</span><Icon size={18}/></div><strong>{value}</strong><small>{detail}</small></div>;
}

export default function App() {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">OW</div><div><b>Operations</b><span>Workspace</span></div></div>
      <div className="workspace"><Building2 size={17}/><div><small>WORKSPACE</small><b>Demo Organisation</b></div></div>
      <nav>{nav.map(([label, Icon], i) => <a className={i === 0 ? 'active' : ''} href="#" key={label}><Icon size={18}/><span>{label}</span>{label === 'My Work' && <em>14</em>}</a>)}</nav>
      <div className="sidebar-bottom"><a href="#"><Settings size={18}/>Settings</a><div className="profile"><div className="avatar">MS</div><div><b>Operations Manager</b><span>Workspace Admin</span></div><MoreHorizontal size={18}/></div></div>
    </aside>

    <main>
      <header><div><h1>Operations overview</h1><p>Wednesday, 16 September · Here's what needs your attention.</p></div><div className="header-actions"><button className="search"><Search size={17}/>Search</button><button className="primary"><Plus size={17}/>New project</button></div></header>

      <section className="metrics">
        <Metric label="Active projects" value="14" detail="3 due this month" icon={BriefcaseBusiness}/>
        <Metric label="Open actions" value="47" detail="8 overdue · 12 due soon" icon={ClipboardCheck}/>
        <Metric label="Committed budget" value="AED 3.84m" detail="of AED 5.20m approved" icon={CircleDollarSign}/>
        <Metric label="Needs attention" value="9" detail="4 approvals · 5 exceptions" icon={AlertTriangle}/>
      </section>

      <section className="grid-main">
        <div className="panel projects-panel"><div className="panel-head"><div><h2>Active projects</h2><p>Portfolio delivery across your operations</p></div><button>View all <ChevronRight size={15}/></button></div>
          <div className="project-table"><div className="table-head"><span>PROJECT</span><span>PROGRESS</span><span>BUDGET</span><span>STATUS</span><span>DUE</span></div>
            {projects.map(p => <div className="project-row" key={p.name}><div><b>{p.name}</b><small>{p.site} · {p.area}</small></div><div className="progress"><div><i style={{width: `${p.progress}%`}}></i></div><span>{p.progress}%</span></div><strong>{p.budget}</strong><span className={`status ${p.status.toLowerCase().replace(' ','-')}`}>{p.status}</span><span>{p.due}</span></div>)}
          </div>
        </div>

        <div className="panel attention"><div className="panel-head"><div><h2>Needs attention</h2><p>Items requiring action</p></div><button>View all</button></div>
          {attention.map(([title, desc, time]) => <div className="attention-row" key={title}><div className="attention-icon"><AlertTriangle size={16}/></div><div><b>{title}</b><span>{desc}</span></div><small>{time}</small></div>)}
        </div>
      </section>

      <section className="lower-grid">
        <div className="panel"><div className="panel-head"><div><h2>My work</h2><p>Your actions across all projects</p></div><button>Open My Work <ChevronRight size={15}/></button></div><div className="work-stats"><div><strong>8</strong><span>Overdue</span></div><div><strong>12</strong><span>Due soon</span></div><div><strong>6</strong><span>Waiting on</span></div><div><strong>4</strong><span>Approvals</span></div></div></div>
        <div className="panel"><div className="panel-head"><div><h2>Operational controls</h2><p>Contracts, compliance and suppliers</p></div></div><div className="control-list"><div><FileText size={18}/><span><b>3 contracts</b> require attention in the next 90 days</span></div><div><ShieldCheck size={18}/><span><b>5 compliance items</b> are missing or expiring</span></div><div><UsersRound size={18}/><span><b>7 supplier updates</b> are currently outstanding</span></div></div></div>
      </section>
    </main>
  </div>;
}
