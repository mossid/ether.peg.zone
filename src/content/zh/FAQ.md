# 常问问题

[[toc]]

### 什么是分片？

分片是为了将工作负载分成多个部分
水平缩放。有很多方法可以在SQL数据库中处理分片，
但是块链的分片是一个新兴领域。我们最近的事情
是altcoins生态系统，但这不是很好，因为所有的山寨币
是他们自己的孤岛，没有良好的方式互相操作，除非通过集中
交易或技巧，如哈希锁定的交易（如闪电网络），
它们有自己的优点和缺点。

### Cosmos如何做分片？

Cosmos使用区域实现分片。这是一个保存的分片解决方案
碎片的主权作为一个自我管理和自我验证的系统。
宇宙中心不关心宇宙大地带的内部状态 - 
相反，所有对宇宙中心重要的是区域明确
通过IBC数据包与宇宙中心通信。

### 什么是IBC包？

IBC分组是一个区块链希望发送到另一个的数据分组
区块链。但是，而不是字面上通过TCP / IP发送一个字节数据包
或UDP / IP协议（设计用于单一，物理，机器），IBC
分组需要加密证明存在。因为没有单个节点或
验证者有权代表整个区块链发言，
因为我们不想依靠IP互联网基础设施的完整性，
而是依赖于blockchain哈希提交的加密证明（+2 / 3
签名的blockchain哈希）以及一个Merkle-proof从
前述的块散列到区块链的“应用状态”中的分组，
这证明blockchain验证器同意发布这个数据包
信息。所以，任何人谁看到一个IBC数据包（不管来源
这个数据）可以验证其完整性。

### 这不是只是sidechains，像什么Blockstream建议？

是。究竟。除了在宇宙，集线器和区域都由Tendermint供电
共识。 IBC on Tendermint是伟大的，因为所有的原因
轻客户支付验证是伟大的相比，工作证明 - 
超快的速度，无需下载所有的块头，1块的最终性和
安全通过抵押品。所以宇宙有点像Blockstream的侧链
提案，除了Cosmos Hub在中心，而不是比特币
使一切更快，更简单，可以说更安全。还有事实
宇宙中心是一个多集区块链是一个很大的优势。


### Cosmos如何比较以太坊分片？

Vitalik正在研究以太坊的分片解决方案，但我的解决方案
假设所有的分片都运行相同的虚拟机。最大的区别
在Vitalik的最新分片设计和宇宙之间是宇宙中心
允许您插入任何区域，即使是完全不同的VM或没有VM的区域
（比如Bitcoind）。这是因为宇宙中心是关于保存
跨区域/碎片的令牌的总数，而Vitalik的缩放
解决方案是关于分割一般以太坊状态机状态。区域
的宇宙中枢不关心其他区域失败或崩溃，只要
Cosmos Hub继续运行并保留跨越的令牌的总数
所有区域。 Vitalik正试图创建一个分片解决方案，其中没有
碎片可能失败，因为那些碎片的内部状态可能意味着
任何东西。 Vitalik正试图解决一个更加困难的问题。如果
我们做正确的工作，我们将能够实现他内部的任何
宇宙。

### 为什么碎片称为区域？

碎片在宇宙中被称为地带，因为它们真的像主权
经济区。我们已经看到了以太坊的区块链治理的品味
硬叉下面的TheDAO黑客。在宇宙，所有区域都是主权和可以
构建自己的治理策略，但它们都可以互操作
宇宙中心。这是IBC抽象的好处，就是它
负责和密码可验证的沟通。

### 如何在这个系统中兑换货币？

对于Cosmos系统外的令牌，它们只能通过挂钩引入
衍生物（类似于Blockstream的侧链纸提出的建议）。一世
假设你也可以使用其他方法跟踪一些令牌里面的值
Cosmos网络通过涉及预测市场或投注，但我不是
专家。他们也可以被其他区域支持，但我不会进去
他们在这里。

在宇宙中心，钉将被绑定到一个特定的区域;即一个区域及其
验证器集合也期望参与一个m-of-n合同
目标链，如比特币或以太坊。

```
            - peg智能合约
          /
  [Ethereum] < - > [EtherCosmos Peg Zone] <-IBC-> [Cosmos Hub] <-IBC->（Bitcoin）[PoW / Casper]
                      [Tendermint] [Tendermint] <-IBC->（exchange）
```

一旦令牌在中心，它必须更容易交换货币。或者
与另一个帐户直接在Cosmos Hub（一个发送交易与
两个输入和两个输出，具有2个不同的资产，被交换）。但是这个
要求交易双方在线。相反，你可以发送您的
令牌到交换区，以利用订单簿。

### 所以我可以使用Cosmos交易BTC的ETH吗？

你可以，如果你信任相应的以太坊和比特币peg区。如果
以太坊和比特币的替代品（即相同的代码库，不同的网络）
发射宇宙，你可以直接交易。

### 宇宙是否包括托管？

不是真的，虽然中枢可以被认为是托管代理调解
在两个区之间，但这当然是点。然而，钉在
钉扎区可以很好地利用托管来允许例如BTC移动到
区。

### 如何在这个系统中切换blockchains？

该区域负责提交具有出站硬币的IBC包
另一个区域。区域可以做任何他们想要的，所以它真的取决于逻辑
的区域，以及客户端。理想情况下会有一个标准
规范用于构建将资金从一个区域移动到另一个区域的交易
另一个。因此，应该实现EVM区域，以便它可以处理这个
通用交易格式，允许任何简单的用户帐户发送资金
另一个区域通过Cosmos Hub（或任何其他集线器）。这可能是什么
定义为IETF或W3C规范，但它有点太早了，所以
我们应该前进并记录规格供大家看。

应该有一些规范定义：
  - 目的地区域
  - 中间区（通常是宇宙中心）
  - 资产和数量
  - 目标帐户或智能合同
  - 任何其他信息

这些在[这里]（
https://github.com/cosmos/cosmos/blob/master/WHITEPAPER.md#ibcpackettx）。

还将有方法来导航这些区域，由此节点或验证器
区域可以自愿发布其IP端点或其他内容。所以区域发现
是一件事，但大多数是由最终客户端软件来理解这一点
管道。最终用户不应该知道除了一些规则之外的所有细节
安全，像“不要汇钱给你不知道的区域”。


### 共识是否可配置？当我在区块链之间切换不会在不同的情况下我的共识是不同的？

我们可以容纳其他PoS共识机制，只要他们有一个非常
清洁和服务轻 - 客户端验证协议。或者，甚至Tendermint可能
升级以支持附加功能。这将是由宇宙网络基金会
和宇宙治理决定是否支持他们。没有必要
如果可以有适配器区域。这是一个比特币peg区域 - 一个适配器
区位于PoW和Tendermint之间。


### Cosmos中的最大节点数是多少？每个区域或集线器是否有自己的节点？

是。每个区域都有自己的节点，我们不会重用公钥（尽管我们
可能在未来）。不同的原子键合在每个区域，但都是相同的
原子令牌。


### 做选择的验证器，验证每个区域和中心的事务？

区域的验证器仅验证其区域的事务。


### 白皮书指出“区域通过集线器相互通信，主要是以从一个区域到另一个区域的一些令牌集的不对称传输的形式。你能谈谈什么是不对称转移？

这可能不是最好的术语，但我们创造它指的是那种
在Cosmos Hub中发生的区域间令牌传输。转让
令牌不是通过任何双向或双边交换机制，甚至
通过钉。这就好像令牌从一个区域移动到另一个区域。诀窍
是有一个共同的加密“存储” - 宇宙中心。


### 根据白皮书：“宇宙反映了这一立场，因为它没有区分中心 - 没有”顶“中心，最流行或成功的中心是区域采用的问题。在你看来，什么会使中枢更成功，什么会使他们失败？

将有不同的功能...速度（限制到100个验证器），
灵活性（例如，如果在EVM上实现），或者可能是民族状态
赞助或更好地与法律制度（通过传统银行业务）相结合
合作伙伴）等。也可以想象一个更慢，但更分散
“慢中枢”，或更快但是更少的分散的“高频中枢”。


### 放弃那些行为不当的验证器的过程是什么？

如果验证者在同一高度双重签名时自己不正确，
圆的，那么证据是非常短和简单 - 这只是两个
冲突投票。这个证据可以包含在CosmosHub中
斜线事务，并且验证器将立即变为无效
在Slash事务被提交后被减少。

如果有一个区域分支，任一个Cosmos Hub或任何一个区域，两者
冲突的承诺也构成证据。这是一个更复杂
数据结构。它保证至少削减至少1/3的验证器原子
为该区域。


### 委托者是否也可以是验证器？或者是委托者从不验证器？

委托者从不验证。如果有人操作验证器节点希望
要委托，他们需要这样做与他们的自由和未绑定的原子。


### “验证者的投票权力是由成因决定的，或者由区块链决定性地改变，这取决于应用。任何想法什么形状，这将采取什么，你最初想到的投票权？

（这两个单独的问题？你是什么意思“你在想什么
投票权？“）

我不知道这将采取什么形状。我们需要广泛接触
观众的众筹，这将有助于我们获得更好的分配，
即使我们不知道谁拥有这些令牌。

在某种程度上它没有关系，因为即使有攻击和事故
一路上，最终通过硬叉，blockchain可以清除坏
演员。它是反垃圾邮件。

### 你能给出关于你从DLS共识算法中得到的一些细节吗？

锁定机制是我在其他文件中没有看到的东西，像
PBFT。有一个等价于PBFT的系统，但锁定和解锁
PBFT中的力学隐式发生。

增加一轮的时间长度以避开部分同步是
Tendermint共识的早期版本使用的东西。在当前
版本的Tendermint Consensus，这是更多的异步，这个“时间延迟”
被限制为超时期间之后任何投票的2/3法定人数
高度＆amp;回合。

任何投票的2/3法定同步验证器，一种虚拟时钟
周期，也受到DLS的论文（在第5节后）的启发。


### 为什么宇宙的治理比任何其他选择更好？

一个是，利益相关者被明确定义，以及先前的社会契约。 ETH
有一个困难的时间与叉，因为他们不得不问以太的持有人以及
作为矿工，但以太的持有人没有事先的社会契约或义务
参与治理，因此不能及时达到法定人数。问问
矿工是必要的，以确保硬叉将有支持，但后
而他们往往只是跟随金钱和激励。

宇宙是不同的，因为不是匿名的矿工，我们有社会契约
有权利的受约束的验证人和受让人，他们有义务
参与治理。

### 你认为未来最有说服力的用例是什么？

Cosmos允许每个人从各种网络效应中受益
互操作令牌和区域。例如，如果任何人创建peg区域或a
新的令牌类型，所有其他区域可以使用它们，如果他们支持新的令牌
类型。

所以，宇宙中心有一个特定的用例，没有任何东西填充
今天。 Cosmos区域的最佳用例是任何基于令牌的区块链
它受益于新的互操作性，速度和可扩展性。
它可能是一种分布式交换。

### 你觉得Cosmos和Interledger是免费的还是直接与它竞争？

他们比竞争更互补。一个，Interledger会很
有助于创建与传统​​金融界面接触的Cosmos区域
系统。

Interledger也可以直接用于区块链区域之间。为了这
用例，Cosmos中心可能是一个竞争的选择，与其他
Interridger公证集的选项。宇宙中心验证器也可以提供
他们的服务作为Intergedger公证机构。