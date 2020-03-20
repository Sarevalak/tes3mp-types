declare class Database {
    driver: any;
    env: any;
    connection: any;
	constructor();
    public LoadDriver(driver: any): any;
    public Connect(databasePath: any): any;
    public Execute(query: any): any;
    public Escape(string: any): any;
    public CreateTable(tableName: any, columnArray: any): any;
    public DeleteRows(tableName: any, condition: any): any;
    public InsertRow(tableName: any, valueTable: any): any;
    public SelectRow(tableName: any, condition: any): any;
    public SelectRows(tableName: any, condition: any): any;
    public GetSingleValue(tableName: any, column: any, condition: any): any;
    public SavePlayer(dbPid: any, data: any): any;
    public LoadPlayer(dbPid: any, data: any): any;
    public SaveWorld(data: any): any;
    public LoadWorld(data: any): any;
    public CreateCellTables(): any;
    public CreateWorldTables(): any;
    public CreatePlayerTables(): any;
}
