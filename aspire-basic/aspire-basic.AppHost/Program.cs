var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.aspire_basic_ApiService>("apiservice");

builder.AddProject<Projects.aspire_basic_Web>("webfrontend")
	.WithExternalHttpEndpoints()
	.WithReference(apiService);

builder.Build().Run();
