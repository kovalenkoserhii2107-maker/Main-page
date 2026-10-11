// Read-only browser fixture adapter for document illustrations. Not part of the app.
// All balances, operations, suppliers and messages below are fictional examples.
const ts = value => ({toDate:()=>new Date(value),toMillis:()=>new Date(value).getTime()});
const file = name => ({name,type:'application/pdf',size:128000,
    url:`https://firebasestorage.googleapis.com/v0/b/uspih-25.firebasestorage.app/o/demo%2F${encodeURIComponent(name)}?alt=media`});
const week = Object.fromEntries(Array.from({length:7},(_,i)=>[String(i+1),[
    {from:'10:00',to:'14:00',hours:4},{from:'20:00',to:'22:00',hours:2}]]));
const documents = {
    'apartments/125': {balance:-1248,personalAccount:'ДЕМО-00125',balanceUpdatedAt:ts('2026-10-11T08:00:00Z')},
    'status/power': {isOn:false,changedAt:ts('2026-10-11T07:15:00Z')},
    'status/schedule': {week,group:'GPV2.1',groupName:'Черга 2.1',sourceUpdated:'11.10.2026',fetchedAt:ts('2026-10-11T07:00:00Z')},
    'status/house_meter_state': {revision:0,totalArea:25600},
    'osbb_settings/finance': {payeeName:'ОСББ «Демо-будинок»',edrpou:'00000000',
        iban:'UA213223130000026007233566001',purposeTemplate:'Внески, кв. {apt}, о/р {account}'},
    'finance/current': {source:'ledger',period:'Вересень 2026',updatedAt:ts('2026-10-11T08:00:00Z'),
        funds:128450,fundsDate:'30.09.2026',income:96450,
        items:[{label:'Ремонт та обслуговування ліфтів',amount:26000,item:'lift'},
            {label:'Прибирання',amount:12800,item:'cleaning'},
            {label:'Електроенергія',amount:4650,item:'electricity'},
            {label:'Поточний ремонт',amount:9000,item:'repairs'}],
        incomeItems:[{title:'Внески співвласників',source:'contributions',factKop:9645000}],
        expenses:[
            {supplier:'ТОВ «Демо-Ліфт»',amountKop:2600000,date:'2026-09-25',description:'Технічне обслуговування ліфтів',item:'Ліфти',doc:'Акт',paid:true,files:[file('Акт_обслуговування.pdf')]},
            {supplier:'ТОВ «Демо-Сервіс»',amountKop:1280000,date:'2026-09-28',description:'Прибирання спільних приміщень',item:'Прибирання',doc:'Рахунок',paid:true,files:[file('Рахунок_прибирання.pdf')]},
            {supplier:'ТОВ «Демо-Енергія»',amountKop:465000,date:'2026-09-30',description:'Електроенергія будинку',item:'Електроенергія',doc:'Рахунок',paid:true,files:[file('Рахунок_електроенергія.pdf')]}
        ]}
};
const logs = [];
for(let day=5;day<=10;day++) {
    logs.push({isOn:false,at:ts(`2026-10-${String(day).padStart(2,'0')}T07:00:00Z`)});
    logs.push({isOn:true,at:ts(`2026-10-${String(day).padStart(2,'0')}T10:00:00Z`)});
}
logs.push(documents['status/power'] && {isOn:false,at:documents['status/power'].changedAt});
const messages = [
    {apt:'125',isBoard:false,text:'Дякую! Де можна переглянути рахунок за обслуговування ліфтів?',createdAt:ts('2026-10-11T08:55:00Z')},
    {apt:'staff-chair',isBoard:true,text:'Звіт за вересень і акти постачальників уже в розділі «Фінанси будинку». Відкрийте «Витрати з документами».',createdAt:ts('2026-10-11T08:52:00Z')},
    {apt:'208',isBoard:false,text:'Підкажіть, будь ласка, коли планують увімкнути світло?',createdAt:ts('2026-10-11T08:45:00Z')},
    {apt:'staff-chair',isBoard:true,text:'За графіком ДТЕК — о 14:00. Фактичний стан і тривалість відключення видно у вашому кабінеті.',createdAt:ts('2026-10-11T08:42:00Z')}
];
const snapshot = (path, data) => ({id:path.split('/').at(-1),ref:{path},
    exists:()=>data!==undefined,data:()=>data,metadata:{hasPendingWrites:false}});
const rows = (path,list) => {const docs=list.map((data,i)=>snapshot(`${path}/demo-${i}`,data));
    return {docs,empty:!docs.length,size:docs.length,forEach:fn=>docs.forEach(fn)};};
export const doc = (_db,...parts)=>({path:parts.join('/')});
export const collection = doc;
export const collectionGroup = (_db,name)=>({path:`group/${name}`});
export const query = ref=>ref;
export const orderBy = ()=>({});
export const where = ()=>({});
export const limit = ()=>({});
export const getDoc = async ref=>snapshot(ref.path,documents[ref.path]);
export const getDocFromServer = getDoc;
export const getDocs = async ref=>rows(ref.path,ref.path==='power_log'?logs:ref.path==='chat'?messages:[]);
export const getDocsFromServer = getDocs;
export function onSnapshot(ref,...args) {
    const callback=args.find(a=>typeof a==='function');
    if(ref.path==='chat') getDocs(ref).then(callback); else getDoc(ref).then(callback);
    return ()=>{};
}
const blocked = ()=>{throw new Error('Presentation demo: writes are blocked');};
export const setDoc=blocked,addDoc=blocked,updateDoc=blocked,deleteDoc=blocked,
    runTransaction=blocked,writeBatch=blocked;
export const serverTimestamp = ()=>ts('2026-10-11T09:00:00Z');
