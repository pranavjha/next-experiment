export default async function EmployeePage({params, searchParams}: {params: Promise<{empid: string}>, searchParams: Promise<Record<string, string>>}) {
    const paramValue = await params;
    return (
        <div className="container">
            <h2> Params </h2>
            <code>{JSON.stringify(paramValue)}</code>
            <h2> Search </h2>
            <code>{JSON.stringify(await searchParams)}</code>
            <h2> Content </h2>
            Hello Employee : {paramValue.empid}
        </div>
    );
}