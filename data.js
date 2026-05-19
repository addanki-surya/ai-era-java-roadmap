// Java AI Architect Roadmap - 2026
window.PHASE_COLORS = ["indigo", "teal", "purple", "amber", "pink", "rust"];
window.ROADMAP = [
  {
    id: 1,
    title: "Docker & Containerization",
    short: "Docker",
    color: "indigo",
    weeks: "Weeks 1–2",
    weeksDetail: "2 weeks · 4 modules",
    difficulty: 2,
    summary: "Package your Java apps into portable containers. The foundation for everything cloud-native. Without this, Kubernetes and production deployment are impossible.",
    endState: "You can containerize any Spring Boot app with MySQL + Redis using multi-stage builds, optimize image size by 80%, and debug container networking issues without Stack Overflow.",
    sections: [
      { n: "1.1", title: "Docker Fundamentals", items: ["Containers vs VMs — the mental model (process isolation, not hardware emulation)", "Docker architecture: daemon, client, registry", "Images vs containers — blueprint vs running instance", "Docker Hub: pulling official images (openjdk, mysql, redis)", "docker run, docker ps, docker stop — the basic workflow"] },
      { n: "1.2", title: "Dockerfile Mastery", items: ["FROM, COPY, RUN, EXPOSE, ENTRYPOINT, CMD — what each does", "Build context and .dockerignore (don't send target/ to daemon)", "Multi-stage builds: Maven build stage → JRE alpine runtime stage", "Layer caching: order instructions to maximize cache hits", "Image size optimization: alpine base, jlink custom JRE, distroless"] },
      { n: "1.3", title: "Docker Compose", items: ["services, networks, volumes — the three pillars", "depends_on and health checks for startup ordering", "Environment variables and .env files for secrets", "Internal bridge networking: containers talk via service names", "docker-compose up -d, logs -f, down — daily workflow"] },
      { n: "1.4", title: "Docker for Spring Boot", items: ["Containerize a Spring Boot .jar with proper JVM flags (-XX:+UseContainerSupport)", "Connect to MySQL container via HikariCP (jdbc:mysql://mysql:3306/db)", "Add Redis container for caching layer", "Production practices: non-root user, health endpoint, graceful shutdown", "Debugging: docker exec -it bash, docker logs --tail 100, docker network inspect"] }
    ]
  },
  {
    id: 2,
    title: "Kubernetes & Helm",
    short: "K8s + Helm",
    color: "teal",
    weeks: "Weeks 3–4",
    weeksDetail: "2 weeks · 4 modules",
    difficulty: 3,
    summary: "Orchestrate containers at scale. Auto-heal crashed pods, auto-scale during traffic spikes, and manage deployments across dev/staging/prod with a single command.",
    endState: "You can deploy a Spring Boot AI service on Minikube via Helm chart, configure HPA for auto-scaling, troubleshoot CrashLoopBackOff, and explain the architecture on a whiteboard.",
    sections: [
      { n: "2.1", title: "K8s Core Concepts", items: ["Why orchestration: what happens when a container crashes at 3 AM?", "Master node: API server, scheduler, controller manager, etcd", "Worker nodes: kubelet, kube-proxy, container runtime", "Declarative management: you describe desired state, K8s makes it happen", "kubectl: the CLI that controls everything"] },
      { n: "2.2", title: "Workloads & Networking", items: ["Pods: smallest deployable unit (wraps your Docker container)", "Deployments: define replicas, rolling updates, rollback strategy", "Services: ClusterIP (internal), NodePort (dev), LoadBalancer (prod)", "Namespaces: isolate dev/staging/prod in same cluster", "DNS: pods find each other via service-name.namespace.svc.cluster.local"] },
      { n: "2.3", title: "Configuration & Reliability", items: ["ConfigMaps: externalize application.yml without rebuilding images", "Secrets: store DB passwords (base64 encoded, mounted as env vars)", "Liveness probe: restart pod if /actuator/health fails", "Readiness probe: stop sending traffic until app is ready", "Resource requests/limits: prevent one pod from eating all CPU/memory"] },
      { n: "2.4", title: "Scaling & Helm Charts", items: ["HPA: auto-scale pods when CPU > 70% (critical for AI workload spikes)", "Helm: the package manager for Kubernetes (like Maven for K8s YAML)", "Chart structure: templates/, values.yaml, Chart.yaml", "values.yaml: one file controls replicas, image tags, env vars per environment", "helm install myapp ./chart --set env=prod — deploy to production"] }
    ]
  },
  {
    id: 3,
    title: "LangChain4j & AI Agents",
    short: "LangChain4j",
    color: "purple",
    weeks: "Weeks 5–7",
    weeksDetail: "3 weeks · 6 modules",
    difficulty: 3,
    summary: "The Java-native AI orchestration library. Build autonomous agents that think, plan, and call your Spring Boot methods without human intervention. This is your primary differentiator.",
    endState: "You can build a multi-tool AI agent that autonomously queries databases, checks K8s cluster health, and returns structured Java objects — all orchestrated via Chain-of-Thought reasoning.",
    sections: [
      { n: "3.1", title: "LLM Fundamentals", items: ["What is an LLM: a statistical model that predicts next tokens", "Tokens: 'hello' = 1 token, 'antidisestablishmentarianism' = 6 tokens", "Context window: how much text the model can see at once (128K for Claude)", "Temperature: 0 = deterministic, 1 = creative", "API-based usage: you send HTTP request, model returns text", "Cost: input tokens + output tokens × price per million"] },
      { n: "3.2", title: "AiServices & Tool Calling", items: ["AiServices: declare a Java interface, LangChain4j implements it with AI", "Method signatures become prompts: String chat(String question)", "@Tool annotation: mark any Java method as callable by the LLM", "How it works: model sees tool descriptions → decides which to call → you execute → return result", "Structured Outputs: force LLM to return exact Java Records/DTOs (no parsing needed)", "Error handling: what happens when the model calls a tool incorrectly"] },
      { n: "3.3", title: "Prompt Engineering in Java", items: ["System prompts: define agent personality and rules as Spring config", "Chain-of-Thought (CoT): 'Think step by step before answering'", "Few-Shot: inject 2-3 examples so model mimics your exact output format", "Zero-Shot: rely on model's training without examples", "Dynamic prompt assembly: build prompts with Java template variables", "Token counting before dispatch: calculate cost, trim if over budget"] },
      { n: "3.4", title: "Context Window Engineering", items: ["Token budget management: allocate tokens across system/user/tools/response", "Sliding window strategies: keep recent N messages, summarize older ones", "Context compression: summarize long conversations to fit window", "Priority ranking: which context chunks matter most for this query?", "Handling 'lost in the middle': important info at start and end, not middle"] },
      { n: "3.5", title: "Long-term Memory Architecture", items: ["The problem: LLMs are stateless — every API call forgets the last one", "Short-term: MessageWindowChatMemory (last N messages in RAM)", "Session memory: Redis for conversation state across requests", "Knowledge memory: pgvector for permanent enterprise knowledge", "Conversation summarization: compress old chats into summaries", "Memory retrieval patterns: when to fetch what from where"] },
      { n: "3.6", title: "Multi-Agent Orchestration", items: ["Why multi-agent: one agent can't be expert at everything", "Specialized Spring Beans: SecurityAuditorAgent, CodeReviewAgent, DBAgent", "Supervisor pattern: master agent delegates subtasks to specialists", "Agent-to-agent communication: pass results via shared context", "Error recovery loops: if agent fails, re-plan with different strategy", "Parallel vs sequential execution: when to fan-out vs chain"] }
    ]
  },
  {
    id: 4,
    title: "RAG & Vector Databases",
    short: "RAG + pgvector",
    color: "amber",
    weeks: "Weeks 8–9",
    weeksDetail: "2 weeks · 4 modules",
    difficulty: 3,
    summary: "Give your AI agents access to enterprise knowledge — codebases, logs, documentation. Search by meaning, not keywords. This is how you eliminate hallucinations.",
    endState: "You can ingest an entire Java codebase into pgvector, perform semantic search to find relevant methods, and build hybrid retrieval pipelines that feed precise context to LLMs.",
    sections: [
      { n: "4.1", title: "RAG Concepts", items: ["Why LLMs hallucinate: they only know training data (cutoff date)", "RAG pipeline: Ingest → Chunk → Embed → Store → Retrieve → Generate", "When RAG beats fine-tuning: almost always for enterprise (cheaper, updatable)", "Evaluation metrics: precision (relevant results), recall (found all relevant), faithfulness (no hallucination)"] },
      { n: "4.2", title: "Embeddings & pgvector", items: ["Embeddings: convert text into float[] vectors (e.g., 1536 dimensions)", "Cosine similarity: measure how 'close' two vectors are (1.0 = identical meaning)", "pgvector: PostgreSQL extension — store vectors alongside your relational data", "CREATE TABLE docs (id serial, content text, embedding vector(1536))", "Embedding models: local (ONNX Runtime, DJL) vs cloud (Bedrock Titan, OpenAI)"] },
      { n: "4.3", title: "Document Ingestion Pipeline", items: ["Parsing: extract text from PDFs, Java source files, log files, Confluence pages", "Chunking strategies: fixed-size (512 tokens), overlapping (50 token overlap), semantic (by method/paragraph)", "Why chunk size matters: too big = noise, too small = lost context", "Metadata attachment: file path, class name, method name — for filtering later", "Token-aware splitting: never cut mid-sentence or mid-code-block"] },
      { n: "4.4", title: "Search & Retrieval", items: ["HNSW index: approximate nearest neighbor — fast (ms) but uses more memory", "IVFFlat index: exact search on clusters — slower but memory-efficient", "Semantic search: SELECT * FROM docs ORDER BY embedding <=> query_vector LIMIT 5", "Hybrid search: combine vector similarity + SQL WHERE (e.g., WHERE file_path LIKE '%payment%')", "Re-ranking: use a cross-encoder model to re-score top-20 results for precision"] }
    ]
  },
  {
    id: 5,
    title: "Reactive Streaming & Java 21",
    short: "Reactive + Java 21",
    color: "pink",
    weeks: "Weeks 10–11",
    weeksDetail: "2 weeks · 3 modules",
    difficulty: 3,
    summary: "Handle 50,000 concurrent AI calls without crashing. Stream LLM tokens to users in real-time like ChatGPT. This is what separates a 35 LPA dev from a 45 LPA architect.",
    endState: "You can build a ChatGPT-style streaming UI backed by Java 21 Virtual Threads, Spring WebFlux SSE endpoints, and Kafka event buffering — handling massive concurrent load.",
    sections: [
      { n: "5.1", title: "Java 21 Virtual Threads", items: ["The problem: traditional threads cost ~1MB each — 10K threads = 10GB RAM", "Virtual Threads (Project Loom): lightweight threads managed by JVM, not OS", "How VTs work: they 'park' during blocking I/O (LLM API call) without holding OS thread", "Result: 50K concurrent LLM calls on a single 4GB pod", "Structured concurrency: coordinate parallel tool executions that depend on each other", "Migration: replace ExecutorService.newFixedThreadPool → Executors.newVirtualThreadPerTaskExecutor()"] },
      { n: "5.2", title: "Spring WebFlux & SSE", items: ["Reactive streams: Flux (0..N items) and Mono (0..1 item)", "Non-blocking I/O: event loop model — one thread handles thousands of connections", "Server-Sent Events (SSE): text/event-stream content type", "Build streaming endpoint: return Flux<String> that emits tokens as they arrive from LLM", "JavaScript EventSource: browser API that consumes SSE (3 lines of code)", "Backpressure: what happens when LLM produces tokens faster than client can consume"] },
      { n: "5.3", title: "Apache Kafka for AI Pipelines", items: ["Why Kafka: if 10K customer TRs arrive simultaneously, your app shouldn't crash", "Topics: named channels for events (e.g., 'customer-incidents')", "Producers: your API gateway writes incoming requests to Kafka", "Consumers: your AI service reads from Kafka at its own pace", "Consumer groups: scale horizontally — add more consumers for more throughput", "Dead Letter Queue (DLQ): poison-pill messages go here instead of crashing your consumer", "spring-kafka: KafkaTemplate (produce) + @KafkaListener (consume)"] }
    ]
  },
  {
    id: 6,
    title: "Security, FinOps & AWS Cloud",
    short: "Security + AWS",
    color: "rust",
    weeks: "Weeks 11–12",
    weeksDetail: "2 weeks · 3 modules",
    difficulty: 3,
    summary: "Make AI safe for banks and fintechs. Cut cloud costs by 50%. Deploy to production on AWS. This is what justifies the 45 LPA premium — you protect the company from lawsuits AND save them money.",
    endState: "You can build a zero-trust AI gateway with PII masking, prompt injection defense, semantic caching (52% cost reduction), and deploy the entire stack on AWS ECS + RDS + Bedrock.",
    sections: [
      { n: "6.1", title: "Enterprise AI Security", items: ["PII Masking: regex interceptors that scrub Aadhaar (12 digits), PAN (ABCDE1234F), email, credit cards", "Implementation: Spring OncePerRequestFilter that runs BEFORE outbound LLM call", "Prompt injection defense: detect 'ignore previous instructions' patterns → reject with 403", "Output guardrails: validate LLM response before exposing to user (no leaked secrets, no hallucinated URLs)", "Audit logging: record every AI decision for regulatory compliance (who asked what, what was returned)"] },
      { n: "6.2", title: "AI Cost Optimization (FinOps)", items: ["The problem: raw Bedrock/OpenAI billing can exceed ₹15 lakhs/month without controls", "Semantic prompt caching: embed the question → check Redis for >0.92 cosine similarity → return cached answer ($0)", "Token compaction: strip HTML tags, duplicate stack traces, system noise BEFORE tokenization (save 40-50%)", "Model routing: simple questions → cheap/fast model (Haiku), complex reasoning → expensive model (Claude Sonnet)", "Cost-per-feature dashboards: track which product feature burns the most AI budget", "Cache hit ratio optimization: tune similarity threshold (0.90 vs 0.95) for your domain"] },
      { n: "6.3", title: "AWS Cloud Deployment", items: ["AWS Bedrock: managed access to Claude, Titan, Llama via Java SDK (no GPU management)", "InvokeModel API: send prompt, get response — with streaming support", "AWS ECS (Elastic Container Service): deploy your Docker images in managed clusters", "AWS RDS: managed PostgreSQL with pgvector extension enabled", "VPC: private subnets — your database and AI services are NOT on public internet", "IAM: zero-trust roles — your Java app gets a role that can ONLY call Bedrock, nothing else"] }
    ]
  }
];

window.CAPSTONES = [
  {
    n: 1,
    title: "Cognitive DevOps & Incident Automation Platform",
    phase: "Spans all 6 phases (Weeks 1–12)",
    domain: "DevOps + AI + Enterprise Java",
    stack: ["React + SSE", "Spring WebFlux", "Java 21 Virtual Threads", "Apache Kafka", "Redis Semantic Cache", "LangChain4j + @Tool", "pgvector HNSW", "AWS Bedrock", "Docker + K8s + Helm"],
    build: [
      "React dashboard with real-time SSE token streaming",
      "Spring WebFlux reactive gateway with Kafka event buffering",
      "PII masking filter interceptor (Aadhaar/PAN/email scrubbing)",
      "Redis semantic cache with 0.92 cosine similarity threshold",
      "LangChain4j orchestrator agent on Java 21 Virtual Threads",
      "@Tool: Kubernetes API integration (pod health audit)",
      "@Tool: pgvector RAG (semantic codebase search)",
      "@Tool: AWS Bedrock Claude (code fix reasoning)",
      "Helm chart deployment with values.yaml for multi-env"
    ],
    proves: "Reduces MTTR from 3 hours to 12 minutes. Cuts LLM costs by 52% via caching. Zero PII leakage to external APIs. Handles 10K concurrent TRs without crash."
  }
];

window.OUT_OF_SCOPE = [
  { title: "Training LLMs from scratch", why: "You consume models via API, not build them. Training requires GPU clusters and ML Ops expertise that's a different career path.", pointer: "Hugging Face courses, fast.ai" },
  { title: "Python AI frameworks (CrewAI, AutoGen, LangChain Python)", why: "You're targeting 45 LPA Java roles. Python AI on your resume makes interviewers ask 'why not hire a Python dev instead?'", pointer: "Stick to LangChain4j — native JVM" },
  { title: "Reinforcement Learning / RLHF", why: "Data scientist territory. If you claim RLHF experience, panels will ask if you've trained a model. When you say no, credibility drops.", pointer: "Instead: build evaluation loops that grade LLM outputs" },
  { title: "Neural network architecture design", why: "You don't need to understand transformer internals to call Bedrock APIs. Focus on integration, not research.", pointer: "3Blue1Brown videos for conceptual understanding only" },
  { title: "Fine-tuning models", why: "Requires GPU clusters, training data pipelines, and ML Ops. RAG beats fine-tuning for 95% of enterprise use cases anyway.", pointer: "AWS Bedrock custom models (if ever needed)" },
  { title: "Computer vision / Speech / NLP research", why: "Specialized domains. Your value is in building the platform that connects ANY model to business logic.", pointer: "Explore after landing the 45 LPA role" }
];

window.NEXT_STEPS = [
  { label: "Build", title: "Complete the capstone project end-to-end", body: "Deploy on your local machine first. Then move to AWS free tier (ECS + RDS + Bedrock). This is your interview demo." },
  { label: "Ship", title: "Push to GitHub with clean README", body: "Public repo with architecture diagram, tech stack, and setup instructions. This is your portfolio proof." },
  { label: "Write", title: "Publish 5 LinkedIn posts (one per POC)", body: "Each post: problem → solution → metric. Tag it #JavaAI #LangChain4j. Build visibility before applying." },
  { label: "Resume", title: "Update resume with POC punchlines", body: "Use the exact interview punchlines from this roadmap. Metric-driven, architecture-focused language." },
  { label: "Practice", title: "Whiteboard the CDIP architecture 10 times", body: "Draw it from memory. Explain each component's purpose. Practice answering 'why this choice?' for every box." },
  { label: "Apply", title: "Target: AI Platforms Engineer / Staff Engineer roles", body: "Search for: Senior Java Engineer + AI, Platform Engineer, Staff Engineer. Companies: fintechs, healthtechs, product companies." }
];
