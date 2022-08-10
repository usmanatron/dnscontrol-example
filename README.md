# DNSControl - Example Configuration

This repository shows you how to setup a basic DNSControl setup.  It uses made up domains with made-up records.

## Included Files

| Filename | Details |
| --- | --- |
|[creds.example.json](creds.example.json)| An example credentials file. The structure of this is highly dependent on your choice of Provider |
|[dnscontrol.js](dnscontrol.js)| Contains the actual DNS configuration |

## Usage

* Check that your provider is [supported](https://stackexchange.github.io/dnscontrol/provider-list)!
* Click on "Use this Template" to make a copy of this repository
* Update `dnscontrol.js` to use your provider and include your domain records (using the migration guide linked below)
* Rename `creds.example.json` to `creds.json` and update for your chosen provider **(DON'T COMMIT THIS)**
* Use `dnscontrol preview` to check that everything is setup correctly - if you're simply migrating this shouldn't find any changes
* Now you're ready to make changes via DNScontrol!

## Running DNScontrol

The simplest way is to use Docker.  You can use the following command in Powershell to run the DNscontrol Docker container with your configuration:

```powershell
docker run --rm -it -v ${pwd}/dnsconfig.js:/dns/dnsconfig.js -v ${pwd}/creds.json:/dns/creds.json stackexchange/dnscontrol dnscontrol <command>
```

Simply change `<command>` to the actual command you want to run.  For example, `preview` will do a dry-run against your config and show changes it would make.  To see the full list of available commands, set `<command>` to `--help`

## Useful Links

* [Getting started](https://stackexchange.github.io/dnscontrol/getting-started)
* [dnscontrol.js Language Reference](https://stackexchange.github.io/dnscontrol/js)
* [Provider List](https://stackexchange.github.io/dnscontrol/provider-list)
* [Migration Guide](https://stackexchange.github.io/dnscontrol/migrating)

## License

MIT
