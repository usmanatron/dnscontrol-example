// This is an example dnscontrol.js config file
// The reference docs are available here: https://stackexchange.github.io/dnscontrol/js
// The examples above show only a subset of the
// record types on offer - do have a look!

// Setup your providers
// DNSControl separates the Registrar and the Provider.  Generally:
// * Registrar = Who you Register the Domain with
// * Provider = Who provides the DNS Service for your domain
// It's pretty normal for these to both be the same!
var REGISTRAR = NewRegistrar('gandi', 'GANDI_V5');
var PROVIDER = NewDnsProvider('gandi', 'GANDI_V5');

// Define a domain within a D block
D('example.co.uk', REGISTRAR, DnsProvider(PROVIDER),
    // When specifying TTLs, you can either add them per-record
    // or use DefaultTTL to add a zone default
    DefaultTTL('10800'),

    // @ = Apex domain
    A('@', '1.2.3.4'),
    A('subdomain', '1.2.3.5'),

    // CNAMEs can point to relative relative or absolute targets
    CNAME('cname-relative', 'subdomain'),
    CNAME('cname-full', 'some-other.domain.com.'),

    // TXT Records
    TXT('key', 'value')

    
);

// you can have multiple domains in the same file!
D('example2.co.uk', REG_GANDI, DnsProvider(DNS_GANDI),
    A('@', '4.3.2.1')
);