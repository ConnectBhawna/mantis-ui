export default [
  {
    jobMetadata: {
      jobId: 'ClientErrorLogKafkaSource-4',
      name: 'ClientErrorLogKafkaSource',
      user: 'userA',
      submittedAt: 1648485370741,
      startedAt: 1648485400839,
      jarUrl: 'http://nfmantis-sources-genericqueryablekafka2-source-spring-boot-thin-0.1.5.zip',
      numStages: 2,
      sla: {
        runtimeLimitSecs: 0,
        minRuntimeSecs: 0,
        slaType: 'Lossy',
        durationType: 'Perpetual',
        userProvidedType: '',
      },
      state: 'Launched',
      subscriptionTimeoutSecs: 0,
      parameters: [
        {
          name: 'checkpointStrategy',
          value: 'offsetsOnlyDefaultKafka',
        },
        {
          name: 'enableSecureProtocol',
          value: 'true',
        },
        {
          name: 'kafkaVip',
          value: 'k2-defaultvpc:7102',
        },
        {
          name: 'stageConcurrency',
          value: '2',
        },
        {
          name: 'topic',
          value: 'client_error_log',
        },
      ],
      nextWorkerNumberToUse: 80,
      migrationConfig: {
        strategy: 'PERCENTAGE',
        configString: '{"percentToMove":25,"intervalMs":60000}',
      },
      labels: [
        {
          name: '_mantis.criticality',
          value: 'critical',
        },
        {
          name: '_mantis.version',
          value: '0.1.5 2022-03-28 16:28:16',
        },
        {
          name: '_mantis.artifact',
          value: 'http://nfmantis-sources-genericqueryablekafka2-source-spring-boot-thin-0.1.5.zip',
        },
        {
          name: '_mantis.jobType',
          value: 'source',
        },
        {
          name: '_mantis.user',
          value: 'test-user',
        },
        {
          name: '_mantis.artifact.version',
          value: '0.1.2',
        },
        {
          name: '_mantis.ownerEmail',
          value: 'raven-dev@abc.com',
        },
      ],
    },
    stageMetadataList: [
      {
        jobId: 'ClientErrorLogKafkaSource-4',
        stageNum: 0,
        numStages: 2,
        machineDefinition: {
          cpuCores: 2,
          memoryMB: 4096,
          networkMbps: 128,
          diskMB: 10,
          numPorts: 1,
        },
        numWorkers: 1,
        hardConstraints: [],
        softConstraints: [],
        scalingPolicy: null,
        scalable: false,
      },
      {
        jobId: 'ClientErrorLogKafkaSource-4',
        stageNum: 1,
        numStages: 2,
        machineDefinition: {
          cpuCores: 4,
          memoryMB: 14000,
          networkMbps: 512,
          diskMB: 1000,
          numPorts: 1,
        },
        numWorkers: 3,
        hardConstraints: [],
        softConstraints: [],
        scalingPolicy: null,
        scalable: true,
      },
    ],
    workerMetadataList: [
      {
        workerIndex: 0,
        workerNumber: 71,
        jobId: 'ClientErrorLogKafkaSource-4',
        stageNum: 0,
        numberOfPorts: 5,
        metricsPort: 7236,
        consolePort: 7238,
        debugPort: 7237,
        customPort: 7239,
        ports: [7240],
        state: 'Started',
        slave: '100.85.104.205',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S18309',
        cluster: 'mantisagent-main-m5.4xlarge-3',
        resourceCluster: null,
        acceptedAt: 1676614499113,
        launchedAt: 1676614499197,
        startingAt: 1676614535690,
        startedAt: 1676614535942,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 61,
        totalResubmitCount: 6,
      },
      {
        workerIndex: 1,
        workerNumber: 51,
        jobId: 'ClientErrorLogKafkaSource-4',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7216,
        consolePort: 7218,
        debugPort: 7217,
        customPort: 7219,
        ports: [7220],
        state: 'Started',
        slave: '100.82.24.202',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S16118',
        cluster: 'mantisagent-main-m5.4xlarge-2',
        resourceCluster: null,
        acceptedAt: 1668384082445,
        launchedAt: 1668384082563,
        startingAt: 1668384105395,
        startedAt: 1668384108864,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 42,
        totalResubmitCount: 3,
      },
      {
        workerIndex: 0,
        workerNumber: 41,
        jobId: 'ClientErrorLogKafkaSource-4',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7206,
        consolePort: 7208,
        debugPort: 7207,
        customPort: 7209,
        ports: [7210],
        state: 'Started',
        slave: '100.85.172.93',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S16961',
        cluster: 'mantisagent-main-m5.4xlarge-2',
        resourceCluster: null,
        acceptedAt: 1668196885301,
        launchedAt: 1668196888886,
        startingAt: -1,
        startedAt: 1668196936586,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 21,
        totalResubmitCount: 2,
      },
      {
        workerIndex: 2,
        workerNumber: 43,
        jobId: 'ClientErrorLogKafkaSource-4',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7201,
        consolePort: 7203,
        debugPort: 7202,
        customPort: 7204,
        ports: [7205],
        state: 'Started',
        slave: '100.85.169.47',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S18539',
        cluster: 'mantisagent-main-m5.4xlarge-3',
        resourceCluster: null,
        acceptedAt: 1668202855070,
        launchedAt: 1668202855208,
        startingAt: 1668202925211,
        startedAt: 1668202927942,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 23,
        totalResubmitCount: 2,
      },
    ],
    terminatedAt: -1,
    version: null,
  },
  {
    jobMetadata: {
      jobId: 'RavenConnectorJob-1933499',
      name: 'RavenConnectorJob',
      user: 'userB',
      submittedAt: 1668025818544,
      startedAt: 1668025851145,
      jarUrl: 'http://raven-connector-job-thin-1.0.139.zip',
      numStages: 2,
      sla: {
        runtimeLimitSecs: 0,
        minRuntimeSecs: 5,
        slaType: 'Lossy',
        durationType: 'Perpetual',
        userProvidedType: null,
      },
      state: 'Launched',
      subscriptionTimeoutSecs: 30,
      parameters: [
        {
          name: 'subscriptionId',
          value: 'raven_1668025818529',
        },
        {
          name: 'target',
          value:
            '{"targets":[{"sourceJobName":"ConsolidatedLoggingEventKafkaSource","criterion":"SELECT * \\nFROM stream \\nWHERE e[\\"event_most_derived_type\\"] == \\"Focus\\" &&\\n      e[\\"event\\"] ==~ /.*RESTART_MEMBERSHIP_UMA.*/ &&\\n      e[\\"source\\"] == \\"tvui\\"","appName":""}]}',
        },
        {
          name: 'mantis.stageConcurrency',
          value: '4',
        },
        {
          name: 'mql.source.concurrency',
          value: '4',
        },
        {
          name: 'edxId',
          value: '4667c6f1-3aa2-4c02-8884-a7a333f51b28',
        },
        {
          name: 'mapperConfig',
          value: '[{"sourceJobName":"ConsolidatedLoggingEventKafkaSource", "useGraal":true}]',
        },
        {
          name: 'mantisAtlasProcessorJson',
          value:
            '[{"atlasDetails":[{"type":"counter","name":"ab47902UmsAlertCtaFocusSessions","keys":[],"tagKeys":["messageName","country","cta","abTestCell","abTestId","isTester","planID","priceTier"],"unit":"SECONDS"}],"sourceJobName":"ConsolidatedLoggingEventKafkaSource"}]',
        },
        {
          name: 'mantisSourceType',
          value: 'kafkasource',
        },
        {
          name: 'MANTIS_WORKER_JVM_OPTS',
          value: '-XX:+ExitOnOutOfMemoryError',
        },
        {
          name: 'mantis.jobmaster.clutch.config',
          value:
            '{"minSize":3,"maxSize":10,"rps":10000,"minSamples":500,"cooldownSeconds":300,"maxAdjustment":0,"cpu":{"setPoint":55.0,"rope":[25.0,0.0],"kp":0.01,"kd":0.01},"memory":{"setPoint":55.0,"rope":[25.0,0.0],"kp":0.01,"kd":0.01},"network":{"setPoint":55.0,"rope":[25.0,0.0],"kp":0.01,"kd":0.01}}',
        },
      ],
      nextWorkerNumberToUse: 60,
      migrationConfig: {
        strategy: 'PERCENTAGE',
        configString: '{"percentToMove":25,"intervalMs":60000}',
      },
      labels: [
        {
          name: '_raven.queryId',
          value: '4667c6f1-3aa2-4c02-8884-a7a333f51b28',
        },
        {
          name: '_mantis.version',
          value: '1.0.139 2022-10-12 17:15:19',
        },
        {
          name: '_mantis.dataOrigin',
          value: 'ConsolidatedLoggingEventKafkaSource',
        },
        {
          name: '_mantis.artifact',
          value: 'raven-connector-job-thin-1.0.139.zip',
        },
        {
          name: '_mantis.jobType',
          value: 'Persistor',
        },
        {
          name: '_mantis.app',
          value: 'Raven',
        },
        {
          name: '_mantis.user',
          value: 'userA',
        },
      ],
    },
    stageMetadataList: [
      {
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 0,
        numStages: 2,
        machineDefinition: {
          cpuCores: 2,
          memoryMB: 4096,
          networkMbps: 128,
          diskMB: 100,
          numPorts: 1,
        },
        numWorkers: 1,
        hardConstraints: [],
        softConstraints: [],
        scalingPolicy: null,
        scalable: false,
      },
      {
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numStages: 2,
        machineDefinition: {
          cpuCores: 4,
          memoryMB: 8000,
          networkMbps: 512,
          diskMB: 1024,
          numPorts: 1,
        },
        numWorkers: 7,
        hardConstraints: [],
        softConstraints: ['M3Cluster'],
        scalingPolicy: {
          stage: 1,
          min: 3,
          max: 10,
          increment: 2,
          decrement: 1,
          coolDownSecs: 300,
          strategies: {
            CPU: {
              reason: 'CPU',
              scaleDownBelowPct: 14,
              scaleUpAbovePct: 70,
              rollingCount: {
                count: 7,
                of: 15,
              },
            },
          },
          enabled: true,
        },
        scalable: true,
      },
    ],
    workerMetadataList: [
      {
        workerIndex: 0,
        workerNumber: 51,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 0,
        numberOfPorts: 5,
        metricsPort: 7201,
        consolePort: 7203,
        debugPort: 7202,
        customPort: 7204,
        ports: [7205],
        state: 'Started',
        slave: '100.85.87.29',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S22286',
        cluster: 'mantisagent-main-m5.4xlarge-3',
        resourceCluster: null,
        acceptedAt: 1677527093863,
        launchedAt: 1677527093954,
        startingAt: 1677527145599,
        startedAt: 1677527145796,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 44,
        totalResubmitCount: 9,
      },
      {
        workerIndex: 6,
        workerNumber: 32,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7201,
        consolePort: 7203,
        debugPort: 7202,
        customPort: 7204,
        ports: [7205],
        state: 'Started',
        slave: '100.85.110.150',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S22328',
        cluster: 'mantisagent-main-m5.4xlarge-3',
        resourceCluster: null,
        acceptedAt: 1671719606338,
        launchedAt: 1671719606400,
        startingAt: 1671719657015,
        startedAt: 1671719674246,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 24,
        totalResubmitCount: 1,
      },
      {
        workerIndex: 3,
        workerNumber: 21,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7206,
        consolePort: 7208,
        debugPort: 7207,
        customPort: 7209,
        ports: [7210],
        state: 'Started',
        slave: '100.85.173.165',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S17234',
        cluster: 'mantisagent-main-m5.4xlarge-2',
        resourceCluster: null,
        acceptedAt: 1670260952196,
        launchedAt: 1670260952237,
        startingAt: 1670260982648,
        startedAt: 1670260988218,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 0,
        totalResubmitCount: 0,
      },
      {
        workerIndex: 4,
        workerNumber: 22,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7211,
        consolePort: 7213,
        debugPort: 7212,
        customPort: 7214,
        ports: [7215],
        state: 'Started',
        slave: '100.85.108.118',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S33937',
        cluster: 'mantisagent-main-m5.4xlarge-1',
        resourceCluster: null,
        acceptedAt: 1670264162186,
        launchedAt: 1670264162235,
        startingAt: 1670264193528,
        startedAt: 1670264198917,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 0,
        totalResubmitCount: 0,
      },
      {
        workerIndex: 5,
        workerNumber: 23,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7206,
        consolePort: 7208,
        debugPort: 7207,
        customPort: 7209,
        ports: [7210],
        state: 'Started',
        slave: '100.85.55.172',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S34412',
        cluster: 'mantisagent-main-m5.4xlarge-2',
        resourceCluster: null,
        acceptedAt: 1670268242185,
        launchedAt: 1670268242246,
        startingAt: 1670268272169,
        startedAt: 1670268277694,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 0,
        totalResubmitCount: 0,
      },
      {
        workerIndex: 0,
        workerNumber: 9,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7211,
        consolePort: 7213,
        debugPort: 7212,
        customPort: 7214,
        ports: [7215],
        state: 'Started',
        slave: '100.82.9.112',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S16763',
        cluster: 'mantisagent-main-m5.4xlarge-2',
        resourceCluster: null,
        acceptedAt: 1668196892053,
        launchedAt: 1668196897360,
        startingAt: 1668196942910,
        startedAt: 1668196949947,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 6,
        totalResubmitCount: 2,
      },
      {
        workerIndex: 1,
        workerNumber: 10,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7211,
        consolePort: 7213,
        debugPort: 7212,
        customPort: 7214,
        ports: [7215],
        state: 'Started',
        slave: '100.85.114.164',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S16110',
        cluster: 'mantisagent-main-m5.4xlarge-2',
        resourceCluster: null,
        acceptedAt: 1668196955969,
        launchedAt: 1668196956636,
        startingAt: 1668197061226,
        startedAt: 1668197070916,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 7,
        totalResubmitCount: 2,
      },
      {
        workerIndex: 2,
        workerNumber: 12,
        jobId: 'RavenConnectorJob-1933499',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7206,
        consolePort: 7208,
        debugPort: 7207,
        customPort: 7209,
        ports: [7210],
        state: 'Started',
        slave: '100.85.38.150',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S18494',
        cluster: 'mantisagent-main-m5.4xlarge-3',
        resourceCluster: null,
        acceptedAt: 1668202869341,
        launchedAt: 1668202874769,
        startingAt: 1668202935014,
        startedAt: 1668202941015,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 8,
        totalResubmitCount: 3,
      },
    ],
    terminatedAt: -1,
    version: null,
  },
  {
    jobMetadata: {
      jobId: 'RavenConnectorJob-1928033',
      name: 'RavenConnectorJob',
      user: 'userC',
      submittedAt: 1665442142772,
      startedAt: 1665442175509,
      jarUrl: 'http://raven-connector-job-thin-1.0.139.zip',
      numStages: 2,
      sla: {
        runtimeLimitSecs: 0,
        minRuntimeSecs: 5,
        slaType: 'Lossy',
        durationType: 'Perpetual',
        userProvidedType: null,
      },
      state: 'Launched',
      subscriptionTimeoutSecs: 30,
      parameters: [
        {
          name: 'subscriptionId',
          value: 'raven_1665442142756',
        },
        {
          name: 'target',
          value:
            '{"targets":[{"sourceJobName":"ClientLogBlobSource","criterion":"SELECT uiver, ctrlcat, groupname, uilaunchorigin, mdxver, delay, _ts_, targettype FROM stream WHERE e[\\"type\\"] == \\"disconnect\\" && e[\\"sev\\"] == \\"info\\"","appName":""}]}',
        },
        {
          name: 'mantis.stageConcurrency',
          value: '2',
        },
        {
          name: 'mql.source.concurrency',
          value: '2',
        },
        {
          name: 'edxId',
          value: 'c1c29264-ab7c-494c-81dd-ac84bb18440f',
        },
        {
          name: 'mapperConfig',
          value:
            '[{"sourceJobName":"ClientLogBlobSource","unpackArrayValues":true,"stateful":false,"useGraal":false}]',
        },
        {
          name: 'mantisAtlasProcessorJson',
          value:
            '[{"atlasDetails":[{"type":"counter","name":"cast.successful_disconnects.v2","keys":[],"tagKeys":["mdxver","mdx.controller","ui.build","cast.uilaunchorigin","cast.type","test.groupname","targettype"],"unit":"SECONDS"},{"type":"distribution","name":"cast.successful_disconnects_delay_percentile.v2","keys":[],"tagKeys":["mdxver","mdx.controller","ui.build","cast.uilaunchorigin","cast.type","test.groupname","targettype"],"valueKey":"delay","unit":"SECONDS"}],"sourceJobName":"ClientLogBlobSource","skip":false,"timeKey":"_ts_"}]',
        },
        {
          name: 'mantisSourceType',
          value: 'kafkasource',
        },
        {
          name: 'MANTIS_WORKER_JVM_OPTS',
          value: '-XX:+ExitOnOutOfMemoryError',
        },
      ],
      nextWorkerNumberToUse: 50,
      migrationConfig: {
        strategy: 'PERCENTAGE',
        configString: '{"percentToMove":25,"intervalMs":60000}',
      },
      labels: [
        {
          name: '_mantis.version',
          value: '1.0.139 2022-09-20 18:13:19',
        },
        {
          name: '_raven.queryId',
          value: 'c1c29264-ab7c-494c-81dd-ac84bb18440f',
        },
        {
          name: '_mantis.dataOrigin',
          value: 'ClientLogBlobSource',
        },
        {
          name: '_mantis.artifact',
          value: 'raven-connector-job-thin-1.0.139.zip',
        },
        {
          name: '_mantis.jobType',
          value: 'Persistor',
        },
        {
          name: '_mantis.app',
          value: 'Raven',
        },
        {
          name: '_mantis.user',
          value: 'sampleUser',
        },
      ],
    },
    stageMetadataList: [
      {
        jobId: 'RavenConnectorJob-1928033',
        stageNum: 0,
        numStages: 2,
        machineDefinition: {
          cpuCores: 2,
          memoryMB: 4096,
          networkMbps: 128,
          diskMB: 100,
          numPorts: 1,
        },
        numWorkers: 1,
        hardConstraints: [],
        softConstraints: [],
        scalingPolicy: null,
        scalable: false,
      },
      {
        jobId: 'RavenConnectorJob-1928033',
        stageNum: 1,
        numStages: 2,
        machineDefinition: {
          cpuCores: 2,
          memoryMB: 8000,
          networkMbps: 512,
          diskMB: 1024,
          numPorts: 1,
        },
        numWorkers: 1,
        hardConstraints: [],
        softConstraints: ['M3Cluster'],
        scalingPolicy: {
          stage: 1,
          min: 1,
          max: 8,
          increment: 2,
          decrement: 1,
          coolDownSecs: 300,
          strategies: {
            Memory: {
              reason: 'Memory',
              scaleDownBelowPct: 0,
              scaleUpAbovePct: 70,
              rollingCount: {
                count: 7,
                of: 15,
              },
            },
            CPU: {
              reason: 'CPU',
              scaleDownBelowPct: 14,
              scaleUpAbovePct: 70,
              rollingCount: {
                count: 7,
                of: 15,
              },
            },
            DataDrop: {
              reason: 'DataDrop',
              scaleDownBelowPct: 0,
              scaleUpAbovePct: 1,
              rollingCount: {
                count: 7,
                of: 15,
              },
            },
          },
          enabled: true,
        },
        scalable: true,
      },
    ],
    workerMetadataList: [
      {
        workerIndex: 0,
        workerNumber: 41,
        jobId: 'RavenConnectorJob-1928033',
        stageNum: 0,
        numberOfPorts: 5,
        metricsPort: 7211,
        consolePort: 7213,
        debugPort: 7212,
        customPort: 7214,
        ports: [7215],
        state: 'Started',
        slave: '100.85.105.214',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S18293',
        cluster: 'mantisagent-main-m5.4xlarge-3',
        resourceCluster: null,
        acceptedAt: 1674956719737,
        launchedAt: 1674956719809,
        startingAt: 1674956757940,
        startedAt: 1674956758160,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 32,
        totalResubmitCount: 9,
      },
      {
        workerIndex: 0,
        workerNumber: 21,
        jobId: 'RavenConnectorJob-1928033',
        stageNum: 1,
        numberOfPorts: 5,
        metricsPort: 7211,
        consolePort: 7213,
        debugPort: 7212,
        customPort: 7214,
        ports: [7215],
        state: 'Started',
        slave: '100.82.50.119',
        slaveID: 'b046f4ef-5d5e-477b-87d2-4a5df4d9618d-S16720',
        cluster: 'mantisagent-main-m5.4xlarge-2',
        resourceCluster: null,
        acceptedAt: 1668202770485,
        launchedAt: 1668202776942,
        startingAt: 1668202856547,
        startedAt: 1668202863860,
        completedAt: -1,
        reason: 'Normal',
        resubmitOf: 1,
        totalResubmitCount: 1,
      },
    ],
    terminatedAt: -1,
    version: null,
  },
];
