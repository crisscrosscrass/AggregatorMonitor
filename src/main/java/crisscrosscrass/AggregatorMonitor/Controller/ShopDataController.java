package crisscrosscrass.AggregatorMonitor.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
public class ShopDataController {
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/Idealo" )
    public String APIGetIdealo(){
        final String uri = "http://10.1.110.13:8080/api/monitor/2119";

        System.out.println("Starting to fetch Data from IP:" + uri);

        RestTemplate restTemplate = new RestTemplate();
        String IdealoShopData = restTemplate.getForObject(uri, String.class);

        System.out.println(IdealoShopData);


        // final String IdealoShopData = "[{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_shoes_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537696000,\"endDate\":1572537888000,\"lastUpdated\":1572537888000,\"auxData\":\"Batch size set to 256 lines (722 kB). pipeline id=[3055]\\n\\n\\nCompletion Message: \\nSYNC_EXCEPTION\",\"lastDuration\":927838,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false},{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_furniture_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537707000,\"endDate\":1572537844000,\"lastUpdated\":1572537844000,\"auxData\":\"SYNC_EXCEPTION\",\"lastDuration\":199808,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false}]\n";
        return IdealoShopData;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/Amazon" )
    public String APIGetAmazon(){
        final String uri = "http://10.1.110.13:8080/api/monitor/58";

        System.out.println("Starting to fetch Data from IP:" + uri);

        RestTemplate restTemplate = new RestTemplate();
        String AmazonShopData = restTemplate.getForObject(uri, String.class);

        System.out.println(AmazonShopData);


        // final String IdealoShopData = "[{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_shoes_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537696000,\"endDate\":1572537888000,\"lastUpdated\":1572537888000,\"auxData\":\"Batch size set to 256 lines (722 kB). pipeline id=[3055]\\n\\n\\nCompletion Message: \\nSYNC_EXCEPTION\",\"lastDuration\":927838,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false},{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_furniture_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537707000,\"endDate\":1572537844000,\"lastUpdated\":1572537844000,\"auxData\":\"SYNC_EXCEPTION\",\"lastDuration\":199808,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false}]\n";
        return AmazonShopData;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/Ebay" )
    public String APIGetEbay(){
        final String uri = "http://10.1.110.13:8080/api/monitor/116";

        System.out.println("Starting to fetch Data from IP:" + uri);

        RestTemplate restTemplate = new RestTemplate();
        String EbayShopData = restTemplate.getForObject(uri, String.class);

        System.out.println(EbayShopData);


        // final String IdealoShopData = "[{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_shoes_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537696000,\"endDate\":1572537888000,\"lastUpdated\":1572537888000,\"auxData\":\"Batch size set to 256 lines (722 kB). pipeline id=[3055]\\n\\n\\nCompletion Message: \\nSYNC_EXCEPTION\",\"lastDuration\":927838,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false},{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_furniture_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537707000,\"endDate\":1572537844000,\"lastUpdated\":1572537844000,\"auxData\":\"SYNC_EXCEPTION\",\"lastDuration\":199808,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false}]\n";
        return EbayShopData;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/Billiger" )
    public String APIGetBilliger(){
        final String uri = "http://10.1.110.13:8080/api/monitor/962";

        System.out.println("Starting to fetch Data from IP:" + uri);

        RestTemplate restTemplate = new RestTemplate();
        String BilligerShopData = restTemplate.getForObject(uri, String.class);

        System.out.println(BilligerShopData);


        // final String IdealoShopData = "[{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_shoes_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537696000,\"endDate\":1572537888000,\"lastUpdated\":1572537888000,\"auxData\":\"Batch size set to 256 lines (722 kB). pipeline id=[3055]\\n\\n\\nCompletion Message: \\nSYNC_EXCEPTION\",\"lastDuration\":927838,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false},{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_furniture_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537707000,\"endDate\":1572537844000,\"lastUpdated\":1572537844000,\"auxData\":\"SYNC_EXCEPTION\",\"lastDuration\":199808,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false}]\n";
        return BilligerShopData;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/Connexity" )
    public String APIGetConnexity(){
        final String uri = "http://10.1.110.13:8080/api/monitor/2155";

        System.out.println("Starting to fetch Data from IP:" + uri);

        RestTemplate restTemplate = new RestTemplate();
        String ConnexityShopData = restTemplate.getForObject(uri, String.class);

        System.out.println(ConnexityShopData);


        // final String IdealoShopData = "[{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_shoes_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537696000,\"endDate\":1572537888000,\"lastUpdated\":1572537888000,\"auxData\":\"Batch size set to 256 lines (722 kB). pipeline id=[3055]\\n\\n\\nCompletion Message: \\nSYNC_EXCEPTION\",\"lastDuration\":927838,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false},{\"name\":\"Sync-Amazon\",\"identification\":\"Shop [58] [Amazon.de] [de_standardized_furniture_retail] delta\",\"mailRecipientsOnError\":\"techops@visual-meta.com\",\"startDate\":1572537707000,\"endDate\":1572537844000,\"lastUpdated\":1572537844000,\"auxData\":\"SYNC_EXCEPTION\",\"lastDuration\":199808,\"appProfile\":\"de.cluster.hadoop\",\"isChildVm\":false,\"maxRuntimeThreshold\":36,\"childVm\":false}]\n";
        return ConnexityShopData;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/jira" )
    public String APIGetJira(){

        return "";
    }
}
